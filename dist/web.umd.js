(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mxDev = factory());
})(this, (function () { 'use strict';

  const unique = function (arr) {
    return [...new Set(arr)]
  };

  var index = {
    unique
  };

  return index;

}));
