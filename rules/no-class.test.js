import { generateRuleTests } from '../utils/test-helpers.js';
import { createErrorMessage } from './no-class.js';

generateRuleTests({
  name: 'css-modules/no-class',

  good: [`<div></div>`, `<div local-class=""></div>`],

  bad: [
    {
      template: '<div class="foo"></div>',
      result: {
        message: createErrorMessage('foo'),
        line: 1,
        column: 5,
        source: 'class="foo"',
      },
    },
    {
      template: '<div class="foo" local-class="bar"></div>',
      result: {
        message: createErrorMessage('foo'),
        line: 1,
        column: 5,
        source: 'class="foo"',
      },
    },
  ],
});
