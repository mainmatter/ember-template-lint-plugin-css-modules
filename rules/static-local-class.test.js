import { generateRuleTests } from '../utils/test-helpers.js';
import { ERROR_MESSAGE } from './static-local-class.js';

generateRuleTests({
  name: 'css-modules/static-local-class',

  good: [
    `<div></div>`,
    `<div local-class=""></div>`,
    `<div local-class="foo"></div>`,
    `<div local-class="foo {{if @bar "bar"}}"></div>`,
    `<div local-class="foo {{if @bar "bar" "baz"}}"></div>`,
  ],

  bad: [
    {
      template: '<div local-class={{@foo}}></div>',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 17,
        source: '{{@foo}}',
      },
    },
    {
      template: '<div local-class="foo {{@bar}}"></div>',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 17,
        source: '"foo {{@bar}}"',
      },
    },
    {
      template: '<div local-class={{if @foo @bar}}></div>',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 17,
        source: '{{if @foo @bar}}',
      },
    },
  ],
});
