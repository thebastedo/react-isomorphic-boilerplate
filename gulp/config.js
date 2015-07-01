var path = require('path');

var src = './src/js';
var dest = './public';

module.exports = {
  src: src,
  browserify: {
    settings: {
      transform: ['reactify', 'babelify']
    },
    src: path.join(src, 'client.jsx'),
    dest: path.join(dest, 'js'),
    outputName: 'application.js',
    debug: process.env.NODE_ENV === 'development'
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
}
