'use strict';

var expect = require('chai').expect;
var dragonBallNames = require('.');

describe('starwars-names', function () {
  it('should have a list of all available names', function () {
    expect(dragonBallNames.all).to.satisfy(isArrayOfStrings);
  });
  it('should allow me to get random name from the list', function () {
    expect(dragonBallNames.random()).to.satisfy(
      isIncludedIn(dragonBallNames.all)
    );
  });
});

function isArrayOfStrings(array) {
  return array.every(function (i) {
    return typeof i === 'string';
  });
}

function isIncludedIn(array) {
  return function (item) {
    return array.includes(item);
  };
}
