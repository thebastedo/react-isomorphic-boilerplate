const React = require('react');
const Country = require('./Country.jsx');

const CountriesClient = require('../clients/CountriesClient');

let Countries = React.createClass({
  getInitialState() {
    return {
      countries: null
    };
  },

  componentWillMount() {
    console.log('Countries CWM');
    CountriesClient.get(this.updateCountries);
  },

  updateCountries(countryObj) {
    let countries = [];

    for (let k in countryObj) {
      countries.push({ code: k, name: countryObj[k] });
    }

    console.log('updateCountries', countries);
    this.setState({ countries: countries });
  },

  renderCountries() {
    if (!this.state.countries) {
      return(
        <li>Loading...</li>
      );
    }

    return this.state.countries.map(function(country) {
      return(
        <Country name={country.name} code={country.code} key={country.code} />
      )
    });

  },

  render() {
    return(
      <div>
        <h6>Countries</h6>
        {this.renderCountries()}
      </div>
    )
  }
});

module.exports = Countries;
