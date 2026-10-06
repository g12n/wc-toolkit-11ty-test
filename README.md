# CEM-Genetator and 11ty for Webcomponents

Authoring and Documenting Webcomponents with [11ty] unsing [cem-generator]. [cem-utilities] 

We are exploring [CSS-only custom elements] as a way to write clean and reusable css.

This project will include the [custom attributes polyfill] by [Keith Cirkel] to explore the implications of this new concept on custom elements manifest in general. 

## Tasks

### Setup include the components into the code

Currently the component code is only copied into the `_site` folder. Try to use the generated manifest to include the code in the html code. 

**challenge**: it looks like there is no other way to distinguish *CSS only* and *JS Components* than checking the file extention of the `definitionPath`.

### Setup inclusion of external code

Setup [Nudeps] with the [11ty] build setup to to include external code like the [custom attributes polyfill], the [Nude UI] [html-demo component], [micro lighter] or the [baseline-status component].

## Research Tasks:

### Custom JS Doc Tags

Adding [Custom JSDoc Tags] `@webFeature` to add a browser support widget to the documentation website. 
Check the [web features explorer] for the adequate web feature.

### Custom Attributes

Explore how [custom attributes] fit into the concept. Create a custom attribute (e.g. the persists attribute from the [custom attributes polyfill] website). Check wether the custom elements manifest is already generated. 

[cem-generator]: https://cem-generator.wc-toolkit.com "CEM-Generator converts your web component source code into a Custom Elements Manifest (CEM), which is a machine-readable description of your components, properties, attributes, events, slots and styling APIs." 

[11ty]: https://www.11ty.dev/ "Eleventy is a simpler static site generator"

[CSS-only custom elements]: https://dev.to/stuffbreaker/css-only-custom-elements-go6 "Article by Burton Smith exploring CSS-Only custom elements"

[cem-utilities]: https://wc-toolkit.com/cem-utilities/cem-utils/

[custom attributes]: https://github.com/keithamus/project-custom-attributes/blob/main/EXPLAINER.md

[custom attributes polyfill]: https://www.keithcirkel.co.uk/custom-attributes-polyfill/

[Keith Cirkel]: https://bsky.app/profile/keithamus.social/post/3mvvoan5dyk23

[Custom JSDoc Tags]: https://cem-generator.wc-toolkit.com/guide/features/jsdoc-tags/

[web features explorer]: https://web-platform-dx.github.io/web-features-explorer/

[web feature]: https://web-platform-dx.github.io/baseline/

[micro lighter]: https://davatron5000.github.io/microlighter/  

[micro lighter accouncement]: https://bsky.app/profile/davatron5000.bsky.social/post/3mth2djeshk26

[baseline-status component]: https://github.com/web-platform-dx/baseline-status

[nudeps]: https://nudeps.dev/ "Nudeps brings native esm module imports to npm install. Use bare specifiers in your browser code without build tools or external hosting."

[Nude UI]: https://nudeui.com

[html-demo component]: https://nudeui.com/components/html-demo/

[Dave Rupert]: https://bsky.app/profile/davatron5000.bsky.social
[Dmitry Sharabin]: https://github.com/DmitrySharabin
[Lea Verou]: https://github.com/LeaVerou

