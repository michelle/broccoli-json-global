# broccoli-json-global

## Installation

```
npm install --save-dev broccoli-json-global
```

## Usage

```js
var jsonGlobal = require('broccoli-json-global');

tree = jsonGlobal('public/data', {

  // The name of your globals object. Default is JSON_DATA.
  globalName: 'GLOBALS',

  // Whether or not to nest data. Keys will be the file name. Default is false.
  nestData: true

});
```
