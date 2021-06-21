# hinton

| :zap:        Use [logslot](https://github.com/markwylde/logslot) instead.   |
|-----------------------------------------|

 
[![Build Status](https://travis-ci.org/markwylde/hinton.svg?branch=master)](https://travis-ci.org/markwylde/hinton)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/hinton)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/hinton)](https://github.com/markwylde/hinton/releases)
[![GitHub](https://img.shields.io/github/license/markwylde/hinton)](https://github.com/markwylde/hinton/blob/master/LICENSE)

Output filterable debug messages for your app

## Example Usage
```javascript
const hinton = require('hinton');
hinton('myapp.test.name.space', 'this is a test')

/*
  OUTPUTS:
  myapp.test.name.space ./index.js:1 this is a test
*/
```

## License
This project is licensed under the terms of the MIT license.
