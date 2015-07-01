const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const Navigation = require('./Navigation.jsx');

let App = React.createClass({
  displayName: 'Application',
  render() {
    return(
      <div>
        <h1>Isomorphic Biolerplate Application!</h1>
        <Navigation/>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;
