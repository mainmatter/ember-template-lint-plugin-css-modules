import StaticLocalClassRule from './rules/static-local-class.js';
import NoClassRule from './rules/no-class.js';

export default {
  name: 'css-modules',
  rules: {
    'css-modules/static-local-class': StaticLocalClassRule,
    'css-modules/no-class': NoClassRule,
  },
};
