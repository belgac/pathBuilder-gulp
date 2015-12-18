var expect = require('chai').expect;
var extensionAdder = require('./index');

module.exports = extensionAdderSpec;

function extensionAdderSpec() {
  return describe('extensionAdder',function(){
    it('should render a file with correct full text extension if a single extension string is given',function(){
      var result = extensionAdder('test','.test');
      
      expect(result).to.equal('test.test')
    })
    it('should render a file with correct full text extension if a single extension string is given in array',function(){
      var result = extensionAdder('test',['test']);
      expect(result).to.equal('test.test')
    })
    it('should render a file with correct mutliple extension if an array of extensions is given',function(){
      var result = extensionAdder('test',['test','test2']);
      expect(result).to.equal('test.(test|test2)')
    })
    require('./lib/singleExtension/index.spec.js')();
    require('./lib/multiExtension/index.spec.js')();
  })
}