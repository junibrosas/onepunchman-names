[![Build Status](https://travis-ci.org/junibrosas/onepunchman-names.svg?branch=master)](https://travis-ci.org/junibrosas/onepunchman-names)

# onepunchman-names

For all your random One Punch Man character needs

# retro-game-names

[![travis build](https://img.shields.io/travis/GAntoine/retro-game-names.svg?style=flat-square)](https://travis-ci.org/GAntoine/retro-game-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/GAntoine/retro-game-names.svg?style=flat-square)](https://codecov.io/github/GAntoine/retro-game-names)
[![version](https://img.shields.io/npm/v/retro-game-names.svg?style=flat-square)](http://npm.im/retro-game-names)
[![downloads](https://img.shields.io/npm/dm/retro-game-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=retro-game-names&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/retro-game-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random names from retro games!

![retro-game-names](other/snes.gif)

## Installation

This package is distributed via npm:

```
npm install onepunchman-names
```

## Usage

```javascript
import names from 'onepunchman-names';
```

## The Library

#### names.all

Return an array of One Punch Man character names.

```javascript
{
  const opNames = names.all;
  console.log(opNames);
  // [ 'Saitama','Genos', 'Blast','Tornado' ... ]
}
```

#### retro.random()

Returns a single One Punch Man character name.

```javascript
const randomName = names.random();
// 'Saitama'
```

### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

```
npm run setup
```

If you get any failures at this point something is wrong and needs to be fixed. Remember,
[Google](https://google.com) and [StackOverflow](https://stackoverflow.com) are your friends.
