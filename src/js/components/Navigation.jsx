const React = require('react');
const Link = require('react-router').Link;

let Navigation = React.createClass({
  render() {
    return(
      <nav>
        <ul>
          <li><Link to="Home">Home</Link></li>
          <li><Link to="About">About</Link></li>
          <li><Link to="Contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
});

module.exports = Navigation;
