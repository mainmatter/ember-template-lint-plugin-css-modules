const { Rule } = require('ember-template-lint');

/**
 * ember-css-modules allows us to use `local-class` attributes to refer to
 * CSS modules that are scoped to only the components. To achieve that CSS
 * modules generates a mapping file from human-readable CSS class names to
 * the globally unique, generated, minified CSS names.
 *
 * ember-css-modules will soon allow us to tree-shake that mapping file and
 * instead put the generated CSS names directly in the templates, which should
 * result in a runtime- and load performance improvement.
 *
 * This optimization is only possible though if our templates use static CSS
 * class names or constructs that are statically analyzable like `if`
 * conditions.
 *
 * This custom ember-template-lint rule checks that we only use static values
 * or if-conditions as values for the `local-class` attributes.
 */
class StaticLocalClassRule extends Rule {
  visitor() {
    return {
      AttrNode(node) {
        let { name, value } = node;
        if (name === 'local-class' && !this.hasStaticValues(value)) {
          this.logForNode(value);
        }
      },

      HashPair(node) {
        let { key, value } = node;
        if (key === 'local-class' && !this.hasStaticValues(value)) {
          this.logForNode(value);
        }
      },
    };
  }

  logForNode(node) {
    this.log({
      message: StaticLocalClassRule.ERROR_MESSAGE,
      line: node.loc && node.loc.start.line,
      column: node.loc && node.loc.start.column,
      source: this.sourceForNode(node),
    });
  }

  hasStaticValues(node) {
    if (node.type === 'TextNode' || node.type === 'StringLiteral') {
      return true;
    }

    if (node.type === 'ConcatStatement') {
      return node.parts.every(part => this.hasStaticValues(part));
    }

    if (node.type === 'MustacheStatement' || node.type === 'SubExpression') {
      if (node.path.original !== 'if') return false;
      return node.params.slice(1).every(param => this.hasStaticValues(param));
    }

    return false;
  }
}

StaticLocalClassRule.ERROR_MESSAGE =
  '`local-class` attributes should only use static values or if conditions';

module.exports = StaticLocalClassRule;
