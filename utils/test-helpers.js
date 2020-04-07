/* eslint-env jest */

const _generateRuleTests = require('ember-template-lint/lib/helpers/rule-test-harness');

function generateRuleTests(options) {
  return _generateRuleTests({
    plugins: [require('../index')],

    groupMethodBefore: beforeEach,
    groupingMethod: describe,
    testMethod: test,
    focusMethod: test.only,

    ...options,
  });
}

module.exports = { generateRuleTests };
