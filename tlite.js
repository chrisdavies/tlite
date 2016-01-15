function tlite(opts, win) {
  opts = opts || {};
  win = win || this;

  var container = opts.container || document.body;
  var hideTimeout = opts.hideTimeout || 3000;
  var showTimeout = opts.showTimeout || 200;
  var tooltipAttrib = 'data-tooltip';
  var setTimeout = win.setTimeout;
  var clearTimeout = win.clearTimeout;

  container.addEventListener('mouseover', function (e) {
    var el = e.target;

    el.hasAttribute(tooltipAttrib) &&
      (el.tooltip || Tooltip(el)).show()
  });

  container.addEventListener('mouseout', function (e) {
    var el = e.target;

    el.tooltip && el.tooltip.hide();
  });

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
    var tooltipEl = document.createElement('div');

    tooltipEl.className = 'tlite';
    tooltipEl.textContent = el.getAttribute(tooltipAttrib);

    container.appendChild(tooltipEl);

    var halfElWidth = bounds.left + (bounds.width / 2);
    var halfTooltipWidth = tooltipEl.offsetWidth / 2;

    tooltipEl.style.top = (bounds.top + bounds.height + container.scrollTop) + 'px';
    tooltipEl.style.left = (halfElWidth - halfTooltipWidth) + 'px';

    tooltipEl.className += ' tlite-visible';

    return tooltipEl;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tlite;
}
