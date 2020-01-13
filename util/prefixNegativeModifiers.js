const _ = require('lodash');

module.exports = function prefixNegativeModifiers(base, modifier) {
  return _.startsWith(modifier, '-') ? `-${base}-${modifier.slice(1)}` : `${base}-${modifier}`;
};
