var gulp = require('gulp');
var config = require('../config');
var livereload = require('gulp-livereload');

gulp.task('build',
  ['browserify'],
  function() {
    gulp.src(config.src).pipe(livereload());
  }
);
