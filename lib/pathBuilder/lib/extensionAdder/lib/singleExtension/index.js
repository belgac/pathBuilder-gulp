module.exports = singleExtension;

function singleExtension (path,extension) {
  if (extension.charAt(0)!=='.') {
    extension = '.' + extension;
  }
  path += extension;
  return path;
}

