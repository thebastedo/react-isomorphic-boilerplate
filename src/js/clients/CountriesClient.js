const request = require('superagent');

let CountriesClient = {
  get(cb) {
    request.get('http://localhost:3000/data/countries.json').end(function(err, res) {
      if (err) {
        console.log('CountriesClient Error:', err);
        return;
      }

      //console.log('Got Countries:', res);
      cb(res.body);
    });
  }
};

module.exports = CountriesClient;
