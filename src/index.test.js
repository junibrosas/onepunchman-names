import { expect } from 'chai';
import dragonBallNames from '.';

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    expect(dragonBallNames.all).to.satisfy(isArrayOfStrings);
  });

  it('should allow me to get a random name from the list', () => {
    expect(dragonBallNames.random()).to.satisfy(
      isIncludedIn(dragonBallNames.all)
    );
  });
});

function isArrayOfStrings(array) {
  return array.every((i) => typeof i === 'string');
}

function isIncludedIn(array) {
  return (item) => array.includes(item);
}
