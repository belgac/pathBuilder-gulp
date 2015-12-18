var expect = require('chai').expect;
var multiExtension = require('./index');

module.exports = multiExtensionSpec;

function multiExtensionSpec() {
  return describe('multiExtension',function(){
    it('should render a correct extension',function(){
      var result = multiExtension('test');
      
      expect(result).to.equal('test')
    })
    it('should render a file with correct extension even if extension has a \'.\'',function(){
      var result = multiExtension('.test');
      expect(result).to.equal('test')
    })
  })
}