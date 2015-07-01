const React = require('react');

let Country = React.createClass({
  render() {
    return(
      <li>{this.props.name} - {this.props.code}</li>
    );
  }
});

module.exports = Country;
