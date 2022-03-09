/* eslint-env jest */

import { generateRuleTests as _generateRuleTests } from 'ember-template-lint';
import plugin from '../index.js';

export function generateRuleTests(options) {
  return _generateRuleTests({
    config: true,
    groupMethodBefore: beforeEach,
    groupingMethod: describe,
    testMethod: test,
    focusMethod: test.only,
    plugins: [plugin],

    ...options,
  });
}
