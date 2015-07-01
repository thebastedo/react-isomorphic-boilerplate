const React = require('react');
const {DefaultRoute, NotFoundRoute, Route} = require('react-router');

const App = require('./Application.jsx');
const Home = require('./Home.jsx');
const About = require('./About.jsx');
const Contact = require('./Contact.jsx');

let routes = (
    <Route handler={App}>
        <Route name="About" path="about" handler={About}/>
        <Route name="Contact" path="contact" handler={Contact}/>
        <DefaultRoute name="Home" handler={Home}/>
    </Route>
);

module.exports = routes;
