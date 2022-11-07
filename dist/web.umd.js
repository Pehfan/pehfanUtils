(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('src/unique/index')) :
  typeof define === 'function' && define.amd ? define(['src/unique/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mxDev = factory(global.index$1));
})(this, (function (index$1) { 'use strict';

  var index = {
    unique: index$1.unique
  };

  return index;

}));
