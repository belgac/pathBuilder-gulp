var expect = require('chai').expect;
var singleExtension = require('./index');

module.exports = singleExtensionSpec;

function singleExtensionSpec() {
  return describe('singleExtension',function(){
    it('should render a file with correct full text extension',function(){
      var result = singleExtension('test','.test');
      
      expect(result).to.equal('test.test')
    })
    it('should render a file with correct extension even if extension is missing a \'.\'',function(){
      var result = singleExtension('test','test');
      expect(result).to.equal('test.test')
    })
    
  })
}