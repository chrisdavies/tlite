function tlite(opts, win) {
  opts = opts || {};
  win = win || this;

  var container = document.body;
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
      tooltipEl && el.removeChild(tooltipEl);

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
    var tooltipEl = document.createElement('div');

    tooltipEl.className = 'tlite';
    tooltipEl.textContent = el.getAttribute(tooltipAttrib);

    el.appendChild(tooltipEl);

    var halfElWidth = el.offsetLeft + (el.offsetWidth / 2);
    var halfTooltipWidth = tooltipEl.offsetWidth / 2;

    tooltipEl.style.top = (el.offsetTop + el.offsetHeight) + 'px';
    tooltipEl.style.left = (halfElWidth - halfTooltipWidth) + 'px';

    tooltipEl.className += ' tlite-visible';

    return tooltipEl;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tlite;
}
