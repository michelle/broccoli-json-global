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
}
console.log(JSONFilter)

JSONFilter.prototype.extensions = ['json'];
JSONFilter.prototype.targetExtension = 'js';
JSONFilter.prototype.processString = function(string) {
  return 'var ' + this.globalName + ' = ' + string + ';';
}
