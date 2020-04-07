# css-modules/no-class

CSS modules allows us to use the [`composes`](https://github.com/css-modules/css-modules#composition)
property to reuse other CSS classes.

This ember-template-lint rule disallows any use of the regular `class`
attributes, in favor of only using `local-class` and adding `composes` in the
style file where needed.

That has the advantage of having everything styling-related only be defined in
the CSS file, and not scattered between template and CSS file.


## Examples

This rule **forbids** the following:

```hbs
<div class="foo"></div>
```

This rule **allows** the following:

```hbs
<div local-class="foo"></div>
```
