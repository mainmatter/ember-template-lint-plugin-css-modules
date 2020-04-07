const { Rule } = require('ember-template-lint');

class NoClassRule extends Rule {
  visitor() {
    return {
      AttrNode(node) {
        if (node.name === 'class') {
          this.log({
            message: NoClassRule.ERROR_MESSAGE(node.value.chars),
            line: node.loc && node.loc.start.line,
            column: node.loc && node.loc.start.column,
            source: this.sourceForNode(node),
          });
        }
      },
    };
  }
}

NoClassRule.ERROR_MESSAGE = classNames => `Found class="${classNames}". Use local-class attribute.`;

module.exports = NoClassRule;
