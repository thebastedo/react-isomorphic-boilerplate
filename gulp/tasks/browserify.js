var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');

var config = require('../config').browserify;

gulp.task('browserify', function() {
  var b = browserify({
    entries: config.src,
    transform: config.settings.transform
  });

  return b.bundle()
    .pipe(source(config.outputName))
    .pipe(buffer())
    .pipe(gulp.dest(config.dest));
});
