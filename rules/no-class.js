import { Rule } from 'ember-template-lint';

export function createErrorMessage(classNames) {
  return `Found class="${classNames}". Use local-class attribute.`;
}
export default class NoClassRule extends Rule {
  visitor() {
    return {
      AttrNode(node) {
        if (node.name === 'class') {
          this.log({
            message: createErrorMessage(node.value.chars),
            line: node.loc && node.loc.start.line,
            column: node.loc && node.loc.start.column,
            source: this.sourceForNode(node),
            node,
          });
        }
      },
    };
  }
}
