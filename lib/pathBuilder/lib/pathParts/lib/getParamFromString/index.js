var evaluateExpression = require('angular-expressions');

module.exports = getParamFromString;

function getParamFromString (key,params) {
  var evaluateLink = evaluateExpression.compile(key);
  var param = evaluateLink(params);
  return param;
}