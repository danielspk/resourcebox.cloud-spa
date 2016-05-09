'use strict';

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
const webpack      = require('gulp-webpack');
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
    .pipe(gulp.dest('.tmp/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('scripts', function() {
  //@todo: --optimize-minimize
  return gulp.src('src/scripts/index.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('templates', function() {
  return gulp.src('src/templates/**/*.html')
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('fonts', function() {
  return gulp.src(['node_modules/daemonite-material/css/fonts/*.{eot,ijmap,svg,ttf,woff,woff2}'])
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
