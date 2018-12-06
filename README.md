# ios-theme-toolkit

A simple library of components in React that follow the style guide of iOS for you to use in your web apps.

NOTE: This package is still in beta but you play around with it, but keep in mind that API can change up to version 1.0.0

[![NPM](https://img.shields.io/npm/v/ios-theme-toolkit.svg)](https://www.npmjs.com/package/ios-theme-toolkit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Documentation](https://img.shields.io/badge/Documentation-online-green.svg)](https://httpiago.github.io/ios-theme-toolkit/)

> All credits go to [@nolimits4web](https://github.com/nolimits4web), he had all the work that recreated the iOS visual identity for [Framework7](https://github.com/framework7io/Framework7), this project just extracted theses styles in a separate package and created a library of components in React on top of that. [Why?](#faq)

## How to use

Install it:

```bash
yarn add ios-theme-toolkit
or
npm install ios-theme-toolkit --save
```

and import the package from anywhere in your project that is accessible to your _bundler_ (Webpack or Rollup).
Example:

```jsx
import React, { Component } from 'react'

import { Button, Input } from 'ios-theme-toolkit'

class Example extends Component {
  render () {
    return (
      <div>
      	<Input fill block value="Hello world" />
      </div>
      <Button fill block color="blue"></Button>
    )
  }
}
```

See how to use the components in the [online documentation](https://httpiago.github.io/ios-theme-toolkit/).

## Libraries and tools used:

- React: To create the components.
- Gulp: To concatenate and minify style files.
- gulp-less: To process the original style files in .less.
- Docz: To do components documentation.
- Rollup: To bundle all components in "dist" folder.

## CLI Commands

- `yarn run create-component`:  Create a new component inside the "./src/components" folder with all the .js, .less and .mdx files already configured.
- `yarn run dev`: Start gulp watch.
- `yarn run docz`: Start docz on port 8000.
- `yarn run build`: Prepare the package to be published (Generate all final files).
- `yarn run deploy`:  Send a new documentation update to remote branch gh-pages and refresh the website.

### Gulp commands

View list of well-documented commands in [gulpfile.js](/gulpfile.js).

### FAQ

<details>
  <summary>Why use ios-theme-toolkit instead of Framework7?</summary>
The Framework7 is an amazin package for creating user interfaces, it offers almost everything you need to create an web app that REALLY looks like native app, however, to enjoy it you have to include all the F7 codes but maybe you just want a button or a text box to include in your project that is done with other technologies like React. So, based on my headaches, I decided to create a small package with various visual iOS elements in case you also only need a beautiful component library.
</details>

<details>
  <summary>Can I use this to build a universal app?</summary>
Yes, this package is optimized to work on the server that renders pages in React, like <a href="https://github.com/zeit/next.js/" target="_blank">Next</a>.
</details>

<details>
  <summary>It is ready to use in production?</summary>
Yes, you can already use this package to create your web apps, but there is still a lot to do, new components to made, improvements, so, if you wanted to help, please don't be shy, <a href="https://github.com/httpiago/ios-theme-toolkit/pulls">send your Pull Request</a> or <a href="https://github.com/httpiago/ios-theme-toolkit/issues">Issue</a> to me.
</details>

<details>
  <summary>Can I use visual styles without React?</summary>
Yes, basically all of these components are just CSS, but I will still document all available classes and how to make the correct use of them.
</details>

## Inspiration

- [Framework7](http://framework7.io)
- [ant-design](https://github.com/ant-design/ant-design)
- [Bootstrap](https://getbootstrap.com/)
- [create-react-library](https://github.com/transitive-bullshit/create-react-library)

## License

MIT © [httpiago](https://github.com/httpiago)
