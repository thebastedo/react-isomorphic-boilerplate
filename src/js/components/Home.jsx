const React = require('react');
const Countries = require('./Countries.jsx');

let Home = React.createClass({
  displayName: 'Home',
  render() {
    return(
      <div>
        <h3>Home</h3>
        <Countries />
      </div>
    )
  }
});

module.exports = Home;
