const _ = require('lodash');

module.exports = function({ addUtilities, e, theme, variants }) {
  const sizes = _.merge(theme('nudging'), require('../../util/nudging.js'));
  const generators = [
    (size, modifier) => ({
      [`.${e(`nudge-p-${modifier}`)}`]: { padding: `${size}` },
    }),
    (size, modifier) => ({
      [`.${e(`nudge-py-${modifier}`)}`]: { 'padding-top': `${size}`, 'padding-bottom': `${size}` },
      [`.${e(`nudge-px-${modifier}`)}`]: { 'padding-left': `${size}`, 'padding-right': `${size}` },
    }),
    (size, modifier) => ({
      [`.${e(`nudge-pt-${modifier}`)}`]: { 'padding-top': `${size}` },
      [`.${e(`nudge-pr-${modifier}`)}`]: { 'padding-right': `${size}` },
      [`.${e(`nudge-pb-${modifier}`)}`]: { 'padding-bottom': `${size}` },
      [`.${e(`nudge-pl-${modifier}`)}`]: { 'padding-left': `${size}` },
    }),
  ];

  const utilities = _.flatMap(generators, generator => {
    return _.flatMap(sizes, generator);
  });

  addUtilities(utilities, variants('padding'));
};
