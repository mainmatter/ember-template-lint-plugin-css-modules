module.exports = {
  name: 'css-modules',

  rules: {
    'css-modules/static-local-class': require('./rules/static-local-class'),
    'css-modules/no-class': require('./rules/no-class'),
  },
};
