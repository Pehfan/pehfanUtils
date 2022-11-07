'use strict';

function unique (arr) {
  return [...new Set(arr)]
}

exports.unique = unique;
