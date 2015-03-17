# broccoli-json-global

## Installation

```
npm install --save-dev broccoli-json-global
```

## Usage

```js
var jsonGlobal = require('broccoli-json-global');

var tree = broccoli.makeTree('public/data');
tree = jsonGlobal(tree);
```
