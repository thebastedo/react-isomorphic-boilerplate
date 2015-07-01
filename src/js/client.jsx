const React = require('react');
const App = require('./components/Application.jsx');
const routes = require('./components/Routes.jsx');
const Router = require('react-router');

//Router.run(routes, Router.HashLocation, (Root) => {
Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('main'));
});
