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
const streamify    = require('gulp-streamify');
const uglify       = require('gulp-uglify');
const source       = require('vinyl-source-stream');

gulp.task('images', function() {
  return gulp.src(['src/images/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('dist/img/'))
});

gulp.task('styles', function() {
  return gulp.src(['src/styles/base.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('browserify', function() {
  return browserify('src/scripts/index.js')
    .external([
      './node_modules/jquery/dist/jquery.js2',
      './node_modules/daemonite-material/js/base.js'
    ])
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('tmp'));
});

gulp.task('scripts', ['browserify'], function() {
  return gulp.src([
      'node_modules/whatwg-fetch/fetch.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/daemonite-material/js/base.js',
      'tmp/bundle.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('templates', function() {
  return gulp.src('src/templates/**/*.html')
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('html', ['templates'], function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
  return gulp.src(['node_modules/daemonite-material/css/fonts/*.{eot,ijmap,svg,ttf,woff,woff2}'])
    .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('build', ['styles', 'scripts', 'html', 'fonts', 'images']);

gulp.task('serve', function() {
  connect.server({
    root: ['dist'],
    port: process.env.PORT || 3000
  });
});

gulp.task('default', ['serve'], function(){
  gulp.watch('src/styles/**/*.scss', { debounceDelay: 3000 }, ['styles']);
  gulp.watch('src/scripts/**/*.js', { debounceDelay: 3000 }, ['scripts']);
  gulp.watch('src/**/*.html', { debounceDelay: 3000 }, ['templates']);
});
