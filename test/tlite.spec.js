var tlite = require('../tlite');

describe('tlite', function () {
  beforeEach(function () {
    this.body = MockEl();

    global.document = {
      body: this.body,
      createElement: MockEl
    };
  });

  describe('event binding', function () {
    it('uses body as container by default', function () {
      var el = this.body;

      tlite();
      expect(el.listeners.length).toBe(2);
      expect(el.listeners.some(function (l) { return l.name === 'mouseover' })).toBeTruthy();
      expect(el.listeners.some(function (l) { return l.name === 'mouseout' })).toBeTruthy();
    });
  })

  describe('show tooltip', function () {
    it('shows the tooltip when a data-tooltip item is hovered', function (done) {
      var target = MockEl('hi');
      var body = this.body;

      tlite({ showTimeout: 1, hideTimeout: 50 }, MockWindow());

      body.trigger('mouseover', { target: target });
      setTimeout(function() {
        expect(target.children.length).toBe(1);
        expect(target.tooltip).toBeDefined();
        expect(target.children[0].textContent).toBe('hi');
        expect(target.children[0].className.trim()).toBe('tlite tlite-visible');
        done();
      }, 2);
    })
  })


  function MockEl(text) {
    return {
      children: [],

      listeners: [],

      style: {},

      removeChild: function (el) {
        this.children = this.children.filter(function (e) { return e !== el });
      },

      appendChild: function (el) {
        this.children.push(el);
      },

      addEventListener: function (name, fn) {
        this.listeners.push({
          name: name,
          fn: fn
        })
      },

      getAttribute: function (attrib) {
        if (attrib !== 'data-tooltip') {
          throw 'Looked for an unsupported attribute: ' + attrib;
        }

        return text;
      },

      getBoundingClientRect: function () {
        return {
          top: 2,
          left: 3,
          width: 4,
          height: 5
        }
      },

      hasAttribute: function (attrib) {
        return !!this.getAttribute(attrib)
      },

      get lastChild () {
        var el = MockEl();
        this.children[1] = el;
        return el;
      },

      get firstChild () {
        var el = MockEl();
        this.children[0] = el;
        return el;
      },

      trigger: function (name, e) {
        this.listeners.forEach(function (l) {
          l.name === name && l.fn(e);
        });
      }
    }
  }

  function MockWindow() {
    return {
      setTimeout: function (fn, timeout) {
        if (timeout < 2) {
          fn();
          return 123;
        }

        return setTimeout(fn, timeout);
      },
      clearTimeout: function () {}
    }
  }
})
