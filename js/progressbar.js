"use strict";

const dashToCamel = str => str.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
const camelToDash = str => str.replace(/(^[A-Z])/, ([first]) => first.toLowerCase()).replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
(function ($, window, document, undefined) {
  "use strict";

  const pluginName = 'scrollIndicator';
  const Plugin = function (elem, options) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
    this.metadata = this.$elem.data(camelToDash(pluginName));
  };
  Plugin.prototype = {
    defaults: {
      grow: true //width // false: left
    },

    init: function () {
      this.config = $.extend({}, this.defaults, this.options);
      $(window).on('load resize scroll', this.update.bind(this));
      return this;
    },
    scrollable: () => document.body.scrollHeight - window.innerHeight,
    update: function () {
      let progress = 100 * (window.scrollY || document.body.scrollTop) / this.scrollable(),
        css = this.config.grow ? {
          width: '100%',
          left: progress - 100 + '%'
        } : {
          width: progress + '%',
          left: 0
        };
      this.$elem.css(css);
    }
  };
  $.fn[pluginName] = function (options) {
    return this.each(() => new Plugin(this, options).init());
  };
  window[pluginName] = Plugin;
})(jQuery, window, document);

//$('[data-scroll-indicator]').scrollIndicator();
//$('[data-module*="scroll-indicator"]').scrollIndicator();

const settingsPropertyRegex = /([\w\-$]+):(?:|\s|\d|false|true|null|undefined|\{|\[|\"|\')/gi;
const settingsQuoteRegex = /'/g;
const parseSettings = function (value) {
  if (!value) {
    return null;
  }
  if (value[0] === '{') {
    // is using JSON syntax
    return jQuery.parseJSON(value);
  }
  value = value.replace(settingsPropertyRegex, '\"$1\":') // wrap all property names with quotes
  .replace(settingsQuoteRegex, '\"'); // replace single-quote character with double quotes

  return jQuery.parseJSON('{' + value + '}');
};
const loadMultipleModules = function (i, obj) {
  let moduleElement = $(obj),
    moduleNames = moduleElement.data('module').split(' ');
  for (var i in moduleNames) {
    if (!moduleNames[i]) {
      continue;
    }
    let moduleName = moduleNames[i],
      fn = dashToCamel(moduleName),
      settingsAttr = moduleElement.attr('data-' + moduleName),
      settings = parseSettings(settingsAttr);
    moduleElement[fn](settings);
  }
};
$('[data-module]').each(loadMultipleModules);
//*/