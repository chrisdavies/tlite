# Tlite

Tlite is a small utility for displaying tooltips.

- Less than 1KB minified and gzipped
- 0 dependencies
- Uses event delegation, so it works with dynamic sites

[![Build Status](https://travis-ci.org/chrisdavies/tlite.svg?branch=master)](https://travis-ci.org/chrisdavies/tlite)

## Usage

Say, you had something like this in your markup:

```html
<button data-tooltip="Hi">Hover Here</button>
```

And this somewhere within the body of your page:

```javascript
tlite()
```

Then, you'll get a nice little tooltip showing up over that button when you hover over it.

## TODO

- Write real documentation
  - Customization
- Provide screenshots
- Provide demo
- Improve testing

## Installing

Download and include `alite.min.js`

Or install using NPM:

    npm install tlite

## License MIT

Copyright (c) 2015 Chris Davies

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
