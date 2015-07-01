const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const CountriesClient = require('../clients/CountriesClient');
const assign = require('object-assign');

_countries = [];

let CountriesStore = assign({}, BaseStore, {
  _load() {
    _countries = CountriesClient.get();
    CountriesStore.emitChange();
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.LOAD:
        CountriesStore._load();
        break;
    }
  })
});

module.exports = CountriesStore;
