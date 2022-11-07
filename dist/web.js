'use strict';

const unique = function (arr) {
  return [...new Set(arr)]
};

exports.unique = unique;
