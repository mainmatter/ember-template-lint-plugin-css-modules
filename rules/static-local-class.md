# css-modules/static-local-class

ember-css-modules allows us to use `local-class` attributes to refer to
CSS modules that are scoped to only the components. To achieve that CSS
modules generates a mapping file from human-readable CSS class names to
the globally unique, generated, minified CSS names.

ember-css-modules could generally allow us to tree-shake that mapping file
and instead put the generated CSS names directly in the templates, which should
result in a runtime and load performance improvement.

This optimization is only possible though if our templates use static CSS
class names or constructs that are statically analyzable like `if` conditions.

This ember-template-lint rule checks that we only use static values or
if-conditions as values for the `local-class` attributes.


## Examples

This rule **forbids** the following:

```hbs
<div local-class={{@foo}}></div>
<div local-class="foo {{@bar}}"></div>
```

This rule **allows** the following:

```hbs
<div local-class="foo"></div>
<div local-class="foo {{if @bar "bar"}}"></div>
<div local-class="foo {{if @bar "bar" "baz"}}"></div>
```
