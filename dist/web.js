'use strict';

const unique = function (arr) {
  return [...new Set(arr)]
};

var index = {
  unique
};

module.exports = index;
