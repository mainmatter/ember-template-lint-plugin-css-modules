'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '2019',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
