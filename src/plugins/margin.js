const prefixNegativeModifiers = require('../../util/prefixNegativeModifiers');
const _ = require('lodash');

module.exports = function({ addUtilities, theme, e, variants }) {
  const sizes = _.merge(theme('nudging'), require('../../util/nudging.js'));
  const generators = [
    (size, modifier) => ({
      [`.${e(prefixNegativeModifiers('nudge-m', modifier))}`]: { margin: `${size}` },
    }),
    (size, modifier) => ({
      [`.${e(prefixNegativeModifiers('nudge-my', modifier))}`]: {
        'margin-top': `${size}`,
        'margin-bottom': `${size}`,
      },
      [`.${e(prefixNegativeModifiers('nudge-mx', modifier))}`]: {
        'margin-left': `${size}`,
        'margin-right': `${size}`,
      },
    }),
    (size, modifier) => ({
      [`.${e(prefixNegativeModifiers('nudge-mt', modifier))}`]: { 'margin-top': `${size}` },
      [`.${e(prefixNegativeModifiers('nudge-mr', modifier))}`]: { 'margin-right': `${size}` },
      [`.${e(prefixNegativeModifiers('nudge-mb', modifier))}`]: { 'margin-bottom': `${size}` },
      [`.${e(prefixNegativeModifiers('nudge-ml', modifier))}`]: { 'margin-left': `${size}` },
    }),
  ];

  const utilities = _.flatMap(generators, generator => {
    return _.flatMap(sizes, generator);
  });

  addUtilities(utilities, variants('margin'));
};
