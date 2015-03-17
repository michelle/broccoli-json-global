var Filter = require('broccoli-filter');

module.exports = JSONFilter
JSONFilter.prototype = Object.create(Filter.prototype);
JSONFilter.prototype.constructor = JSONFilter;

function JSONFilter(inputTree, options) {
  if (!(this instanceof JSONFilter)) {
    return new JSONFilter(inputTree, options);
  }

  Filter.call(this, inputTree, options);
  options = options || {};
  this.globalName = options.globalName || 'JSON_DATA';
  this.nestData = options.nestData;
}

JSONFilter.prototype.extensions = ['json'];
JSONFilter.prototype.targetExtension = 'js';
JSONFilter.prototype.processString = function(string, relativePath) {
  var varName = 'window.' + this.globalName;
  var initializer = '';
  if (this.nestData) {
    initializer = varName + ' = ' + varName + ' || {}; ';
    varName += '[\'' + relativePath.replace(/.json$/, '') + '\']';
  }
  return initializer + varName + ' = ' + string + ';';
}
