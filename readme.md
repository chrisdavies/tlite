# Tlite

Tlite is a small utility for displaying tooltips.

- Around 500 bytes minified and gzipped
- 0 dependencies
- Uses event delegation, so it works with dynamic sites

[![Build Status](https://travis-ci.org/chrisdavies/tlite.svg?branch=master)](https://travis-ci.org/chrisdavies/tlite)

## Usage

Include `tlite.css` or write your own.
Include `tlite.js`.

Then, simply add a `data-tooltip` attribute to any elements that you want to display a tooltip:

```html
<button data-tooltip="Hi">Hover Here</button>
```

And invoke the tlite function to bind tlite to your page:

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
