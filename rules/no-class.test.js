const { generateRuleTests } = require('../utils/test-helpers');
const Rule = require('./no-class');

generateRuleTests({
  name: 'css-modules/no-class',

  config: true,

  good: [`<div></div>`, `<div local-class=""></div>`],

  bad: [
    {
      template: '<div class="foo"></div>',
      result: {
        message: Rule.ERROR_MESSAGE('foo'),
        line: 1,
        column: 5,
        source: 'class="foo"',
      },
    },
    {
      template: '<div class="foo" local-class="bar"></div>',
      result: {
        message: Rule.ERROR_MESSAGE('foo'),
        line: 1,
        column: 5,
        source: 'class="foo"',
      },
    },
  ],
});
