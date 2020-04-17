import uniqueRandomArray from 'unique-random-array';
const onePunchManNames = require('./names.json');

const mainExport = {
  all: onePunchManNames,
  random: uniqueRandomArray(onePunchManNames),
};

export default mainExport;
module.exports = mainExport; // for CommonJS compatability
