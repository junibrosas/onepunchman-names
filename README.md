[![Build Status](https://travis-ci.org/junibrosas/onepunchman-names.svg?branch=master)](https://travis-ci.org/junibrosas/onepunchman-names)

# onepunchman-names

For all your random One Punch Man character needs

![one-punch-man-names](other/pm.gif)

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
