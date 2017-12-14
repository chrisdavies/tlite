# Tlite

Tlite is a small utility for displaying tooltips. ([Check out the demo.](https://chrisdavies.github.io/tlite/))

- Around 800 bytes minified and gzipped
- 0 dependencies
- Uses event delegation, so it is fast and works with dynamic sites
- IE9+, FF, Safari, Chrome

[![Build Status](https://travis-ci.org/chrisdavies/tlite.svg?branch=master)](https://travis-ci.org/chrisdavies/tlite)

There's also a [pretty sweet CSS-only library](https://kushagragour.in/lab/hint/) which may do the trick, depending on your needs.

## Usage

Include `tlite.css` or write your own. Include `tlite.js`. Then write some
markup like this...

```html
<button class="foo" title="Hi">Hover Here</button>
```

And invoke the tlite function to bind tlite to your page:

```javascript
// Using es6 syntax, and classList. tlite should work
// in IE9+, but this sample won't!
tlite(el => el.classList.contains('foo'));
```

That will make any elements with a `foo` class show a tooltip when hovered.

## Customize the tooltip's position

The tooltip can be positioned above, below, left, right, etc as follows:

```html
<button class="foo" data-tlite="s" title="Hi">Hover Here</button>
```

The `data-tlite` attribute specifies the position, but it can also be specified in JavaScript:

```javascript
// grav defaults to 'n' (below the target element)
tlite(el => { grav: 's' });
```

The `grav` property specifies the position of the tooltip possible values are:

- `s` - The tooltip shows above the target
- `n` - The tooltip shows below the target
- `e` - The tooltip shows left of the target
- `w` - The tooltip shows right of the target
- `sw` - The tooltip shows to top right of the target
- `se` - The tooltip shows to top left of the target
- `nw` - The tooltip shows to bottom right of the target
- `ne` - The tooltip shows to bottom left of the target

## Manual controls

You can also manually trigger a show/hide of a tooltip:

```javascript
// Show a tooltip beneath the target element
tlite.show(targetElement);

// Show a tooltip to the right of the target element
tlite.show(targetElement, { grav: 'w' });

// Hide it...
tlite.hide(targetElement);
```

## Caveats

When the tooltip is displayed, it is inserted as a child of the element it is
associated with. What this means is that tooltips cannot be displayed on
contentless tags such as img, input, textarea, etc. The workaround is to put
the toolltip on a wrapper element. This was done so that if an element is
dynamically removed from the DOM, its tooltip goes with it.

If putting a tooltip inside of a table, you may want to put `tlite-table` class on the table to ensure proper positioning.

Tlite was really designed primarily for hover-based tooltips. If you display tlite tooltips on events other than hover (e.g. on focus or something), it is up to you to handle resize events (either repositioning the tooltip or hiding it), otherwise the tooltip could end up in an unexpected place.

Tlite does not escape your tooltip text. So, if you want to shove raw HTML in there, you can. But if you want to shove user-input in there, it is *your* job to ensure it is properly escaped!

## Using something other than title

If you don't want to use the `title` attribute, you can use a `data-tlite` attribute, instead.

```javascript
<button data-tlite="My Tooltip">Hover Over Me</button>
```

## Installing

Download and include `tlite.min.js`

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
