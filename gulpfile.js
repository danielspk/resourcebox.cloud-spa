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
  gulp.src(['src/images/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('dist/img/'))
});

gulp.task('styles', function() {
  gulp.src(['src/styles/base.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(gulp.dest('.tmp/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('browserify', function() {
  browserify("src/scripts/index.js")
    .transform("babelify", { presets: ["es2015"] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('.tmp/js/'))
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(streamify(uglify()))
    //.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', ['browserify'], function() {
  gulp.src([
    'src/bower_components/fetch/fetch.js',
    'src/bower_components/jquery/dist/jquery.js',
    'src/bower_components/daemonite-material/js/base.js',
    '.tmp/js/app.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('.tmp/js/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('templates', function() {
  return gulp.src('src/templates/**/*.html')
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('fonts', function() {
  gulp.src(['src/bower_components/daemonite-material/css/fonts/*.{eot,ijmap,svg,ttf,woff,woff2}'])
    .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('build', ['styles', 'scripts', 'templates', 'fonts', 'images']);

gulp.task('serve', function() {
  connect.server({
    root: ['dist'],
    port: process.env.PORT || 3000
  });
});

gulp.task('default', ['serve'], function(){
  gulp.watch('src/styles/**/*.scss', { debounceDelay: 3000 }, ['styles']);
  gulp.watch('src/scripts/**/*.js', { debounceDelay: 3000 }, ['scripts']);
  gulp.watch('src/templates/**/*.html', { debounceDelay: 3000 }, ['templates']);
});
