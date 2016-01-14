function tlite(opts, win) {
  opts = opts || {};
  win = win || this;

  var container = opts.container || document.body;
  var customStyle = opts.style || {};
  var hideTimeout = opts.hideTimeout || 3000;
  var showTimeout = opts.showTimeout || 200;
  var tooltipAttrib = 'data-tooltip';
  var setTimeout = win.setTimeout;
  var clearTimeout = win.clearTimeout;

  container.addEventListener('mouseover', showTooltip);
  container.addEventListener('mouseout', hideTooltip);

  function showTooltip(e) {
    var el = e.target;

    el.hasAttribute(tooltipAttrib) &&
      (el.tooltip || Tooltip(el)).show()
  }

  function hideTooltip(e) {
    var el = e.target;

    el.tooltip && el.tooltip.hide();
  }

  function Tooltip(el) {
    var tooltipEl;
    var showTimer;
    var hideTimer;

    function show() {
      hideTimer = clearTimeout(hideTimer);

      if (!showTimer) {
        showTimer = setTimeout(fadeIn, showTimeout);
      }
    }

    function hide() {
      hideTimer = clearTimeout(hideTimer);
      showTimer = clearTimeout(showTimer);
      tooltipEl && container.removeChild(tooltipEl);

      tooltipEl = undefined;
    }

    function fadeIn() {
      if (!tooltipEl) {
        tooltipEl = createTooltip(el);
        hideTimer = setTimeout(hide, hideTimeout);
      }
    }

    return el.tooltip = {
      show: show,
      hide: hide
    };
  }


  function createTooltip(el) {
    var bounds = el.getBoundingClientRect();
    var tooltipEl = createEl('<div><i></i><span></span></div>');
    var textEl = tooltipEl.lastChild;
    var arrowEl = tooltipEl.firstChild;

    textEl.textContent = el.getAttribute(tooltipAttrib);

    setStyle(tooltipEl, {
      background: 'black',
      color: 'white',
      fontFamily: 'sans-serif',
      fontSize: '0.8em',
      padding: '0.75em',
      borderRadius: '4px',
      position: 'absolute',
      opacity: 0,
      visibility: 'hidden',
      top: (bounds.top + bounds.height + container.scrollTop) + 'px',
      transition: 'opacity 0.4s',
      boxShadow: '0 0.5em 1em -0.5em black'
    });

    container.appendChild(tooltipEl);

    var halfElWidth = bounds.left + (bounds.width / 2);
    var halfTooltipWidth = tooltipEl.offsetWidth / 2;

    setStyle(arrowEl, {
      background: customStyle.background || customStyle.backgroundColor || 'black',
      display: 'block',
      width: '10px',
      height: '10px',
      position: 'absolute',
      top: '-3px',
      left: '50%',
      marginLeft: '-5px',
      transform: 'rotate(45deg)',
      zIndex: '-1'
    })

    setStyle(tooltipEl, {
      visibility: 'visible',
      opacity: 0.9,
      left: (halfElWidth - halfTooltipWidth) + 'px'
    })

    setStyle(tooltipEl, customStyle);

    return tooltipEl;
  }

  function createEl(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  }

  function setStyle(el, style) {
    for (var key in style) {
      var val = style[key];
      val !== undefined && (el.style[key] = val);
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tlite;
}
