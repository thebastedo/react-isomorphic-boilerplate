var express = require('express');
var router = express.Router();
var React = require('react');
var ReactRouter = require('react-router');
var ReactRoutes = require('../src/js/components/Routes.jsx');
var ReactApp = React.createFactory(require('../src/js/components/Application.jsx'));

/* GET home page. */
router.get('/', function(req, res, next) {
  var r = ReactRouter.create({ location: req.path, routes: ReactRoutes});
  r.run(function(Handler, state) {
    var html = React.renderToString(<Handler/>);
    console.log(html);
    return res.render('index', { reactHtml: html });
  });
  /*
  var reactOutput = ''; // React.renderToString(ReactApp({}));
  res.render('index', { title: 'Isomorphic Boilerplate', reactOutput: reactOutput });
  */
});

module.exports = router;
