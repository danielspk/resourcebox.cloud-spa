'use strict';

const browserify   = require('browserify');
const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');
const connect      = require('gulp-connect');
const minifyCss    = require('gulp-minify-css');
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const streamify    = require('gulp-streamify');
const uglify       = require('gulp-uglify');
const source       = require('vinyl-source-stream');

gulp.task('styles', function() {
  gulp.src(['src/styles/*.scss'])
    .pipe(concat('app.css'))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('public/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css/'))
});

gulp.task('scripts', function() {
  browserify("src/scripts/index.js")
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('public/js'));
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('server', function() {
  connect.server({
    root: ['public'],
    port: process.env.PORT || 3000
  });
});

gulp.task('default', ['server'], function(){
  gulp.watch('src/styles/**/*.scss', {debounceDelay: 3000}, ['styles']);
  gulp.watch('src/scripts/**/*.js' , {debounceDelay: 3000}, ['scripts']);
});
