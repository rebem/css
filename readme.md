[![npm](https://img.shields.io/npm/v/rebem-css.svg?style=flat-square)](https://www.npmjs.com/package/rebem-css)
[![travis](http://img.shields.io/travis/rebem/css.svg?style=flat-square)](https://travis-ci.org/rebem/css)
[![coverage](https://img.shields.io/codecov/c/github/rebem/css.svg?style=flat-square)](https://codecov.io/github/rebem/css)
[![deps](https://img.shields.io/gemnasium/rebem/css.svg?style=flat-square)](https://gemnasium.com/rebem/css)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-46bc99.svg?style=flat-square)](https://gitter.im/rebem/rebem)

BEM syntax for CSS.

## Overview

### Dead simple

It just replaces substrings in selectors:

#### `:block()`

```css
:block(block) {}
.block {}
```

#### `:elem()`

```css
:block(block):elem(elem) {}
.block__elem {}
```

#### `:mod()`

```css
:block(block):mod(mod) {}
.block_mod {}

:block(block):mod(mod val) {}
.block_mod_val {}
```

```css
:block(block):elem(elem):mod(mod) {}
.block__elem_mod {}

:block(block):elem(elem):mod(mod val) {}
.block__elem_mod_val {}
```

### CSS compatible

It's just a custom pseudo-classes, so you can use it with Less or any other CSS preprocessor:

```less
:block(block) {
    &:mod(mod) {

    }

    &:elem(elem) {
        &:mod(mod val) {

        }
    }
}
```

## Usage

`rebem-css` is a [PostCSS](https://github.com/postcss/postcss) plugin.

### CLI

```sh
npm i -S postcss postcss-cli rebem-css
```

```sh
postcss --use rebem-css test.css -o test.css
```

### API

```sh
npm i -S postcss rebem-css
```

```js
var postcss = require('postcss');
var reBEMCSS = require('rebem-css');

console.log(
    postcss([ reBEMCSS ]).process(':block(block) {}').css
);
// .block {}
```

### webpack

```sh
npm i -S postcss postcss-loader rebem-css
```

```js
var reBEMCSS = require('rebem-css');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }
        ]
    },
    postcss: function() {
        return [ reBEMCSS ];
    }
}
```
