/* eslint-disable react/require-extension */
// Bootstrap environment

const onWindowIntl = () => {
  require('babel-polyfill');
  window.Promise = require('../common/configureBluebird');

  // App locales are defined in src/server/config.js
  const { addLocaleData } = require('react-intl');
  const cs = require('react-intl/locale-data/cs');
  const en = require('react-intl/locale-data/en');

  [cs, en].forEach(locale => addLocaleData(locale));

  require('./main');
};

// github.com/andyearnshaw/Intl.js/#intljs-and-browserifywebpack
if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/cs.js',
    'intl/locale-data/jsonp/en.js',
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/cs.js');
    require('intl/locale-data/jsonp/en.js');

    onWindowIntl();
  });
} else {
  onWindowIntl();
}
