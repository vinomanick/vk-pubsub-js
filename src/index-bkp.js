var PubSub = require("pubsub-js");

/* *********** Important ***********
ES3 compatible. PubSubJS should be able to run everywhere that can execute JavaScript.
It also means, you cannot use latest ES6 syntax and features. */

(function () {
  var _pubsub = PubSub;

  // CommonJS and Node.js module support
  if (typeof exports === 'object') {
    if (module !== undefined && module.exports) {
      exports = module.exports = _pubsub; // Node.js specific `module.exports`
    }
    exports = _pubsub; // CommonJS module 1.1.1 spec
    module.exports = exports = _pubsub; // CommonJS
  }
  // AMD support
  else if (typeof define === 'function' && define.amd) {
    define(function () {
      return _pubsub;
    });
  }
})();
