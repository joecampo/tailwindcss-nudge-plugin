const addMarginUtilities = require('./plugins/margin');
const addPaddingUtilities = require('./plugins/padding');

module.exports = function(theme) {
  addMarginUtilities(theme);
  addPaddingUtilities(theme);
};
