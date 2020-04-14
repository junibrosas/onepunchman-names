import uniqueRandomArray from 'unique-random-array';
const dragonBallNames = require('./names.json');

const mainExport = {
  all: dragonBallNames,
  random: uniqueRandomArray(dragonBallNames),
};

export default mainExport;
module.exports = mainExport; // for CommonJS compatability
