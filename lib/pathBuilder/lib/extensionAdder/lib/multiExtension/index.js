module.exports = multiExtension;

function multiExtension (extension) {
  if (extension.charAt(0)==='.') {
    extension = extension.substr(1);
  }
  return extension;
}

