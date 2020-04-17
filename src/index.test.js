import { expect } from 'chai';
import onePunchManNames from '.';

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    expect(onePunchManNames.all).to.satisfy(isArrayOfStrings);
  });

  it('should allow me to get a random name from the list', () => {
    expect(onePunchManNames.random()).to.satisfy(
      isIncludedIn(onePunchManNames.all)
    );
  });
});

function isArrayOfStrings(array) {
  return array.every((i) => typeof i === 'string');
}

function isIncludedIn(array) {
  return (item) => array.includes(item);
}
