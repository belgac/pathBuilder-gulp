var singleExtension = require('./lib/singleExtension');
var multiExtension = require('./lib/multiExtension');

module.exports = extensionAdder;

function extensionAdder (path,extension) {
  if (extension instanceof Array) {
    if (extension.length === 1) {
      path = singleExtension(path,extension[0]);
    } else {
      path += '.(' + extension.map(multiExtension).toString().replace(/,/g,'|') + ')';
    }
  } else if (typeof(extension) === 'string') {
    path = singleExtension(path,extension);
  }
  return path;
}