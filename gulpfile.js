'use strict';

const browserify   = require('browserify');
const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');
const connect      = require('gulp-connect');
const imagemin     = require('gulp-imagemin');
const minifycss    = require('gulp-minify-css');
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const uglify       = require('gulp-uglify');
const riotify      = require('riotify');
const source       = require('vinyl-source-stream');

gulp.task('images', function() {
  return gulp.src(['src/images/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('dist/img/'))
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  return gulp.src(['src/styles/base.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(gulp.dest('tmp/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload());
});

gulp.task('browserify', function() {
  return browserify('src/scripts/app.js')
    .transform('babelify')
    .transform(riotify)
    .bundle()
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('tmp/js'));
});

gulp.task('scripts', ['browserify'], function() {
  return gulp.src([
      'node_modules/whatwg-fetch/fetch.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/daemonite-material/js/base.js',
      'tmp/js/bundle.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
  return gulp.src(['node_modules/daemonite-material/css/fonts/*.{eot,ijmap,svg,ttf,woff,woff2}'])
    .pipe(gulp.dest('dist/css/fonts/'))
});

gulp.task('build', ['styles', 'scripts', 'html', 'fonts', 'images']);

gulp.task('serve', function() {
  connect.server({
    root: ['dist'],
    port: process.env.PORT || 3000,
    livereload: true
  });
});

gulp.task('default', ['serve'], function(){
  gulp.watch('src/styles/**/*.scss', { debounceDelay: 3000 }, ['styles']);
  gulp.watch('src/scripts/**/*.js', { debounceDelay: 3000 }, ['scripts']);
  gulp.watch('src/scripts/**/*.tag', { debounceDelay: 3000 }, ['scripts']);
  gulp.watch('src/**/*.html', { debounceDelay: 3000 }, ['html']);
});
