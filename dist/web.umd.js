(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mxDev = {}));
})(this, (function (exports) { 'use strict';

  function unique (arr) {
    return [...new Set(arr)]
  }

  exports.unique = unique;

}));
