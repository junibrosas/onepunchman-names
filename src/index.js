'use strict';

var uniqueRandomArray = require('unique-random-array');
var dragonBallNames = require('./names.json');

module.exports = {
  all: dragonBallNames,
  random: uniqueRandomArray(dragonBallNames),
};
