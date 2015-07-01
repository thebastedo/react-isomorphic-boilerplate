var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('server', function() {
    livereload.listen();
    nodemon({
        script: 'bin/www',
        watch: ['rotues/*'],
        ext: 'js jsx hbs html',
        env: { 'NODE_ENV': 'development' }
    })
    .on('restart', function() {
      console.log('restarted!');
      livereload();
    });
});
