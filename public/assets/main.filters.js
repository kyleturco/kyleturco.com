'use strict';

angular.module('bankRoll').filter('objToArr', function () {
  return function (obj) {
    if (obj) {
      return Object.keys(obj).map(function (key) {
        obj[key].id = key;
        return obj[key];
      });
    }
  };
});