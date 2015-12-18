var expect = require('chai').expect;
var pathBuilder = require('./index');

module.exports = pathBuilderSpec;

function pathBuilderSpec() {
  return describe('pathBuilder',function(){
    it('should render a path string containing the given parts',function(){
      var test = new pathBuilder();
      var result = test({parts:[{type:'path',value:'test'},{type:'path',value:'test'}]});
      expect(result).to.equal('test/test');
    })
    it('should render a path string containing the given parts and the given extension',function(){
      var test = new pathBuilder();
      var result = test({parts:[{type:'path',value:'test'},{type:'path',value:'test'}],extension:'.js'});
      expect(result).to.equal('test/test.js');
    })
    it('should render a path string containing the given parts and the given extensions',function(){
      var test = new pathBuilder();
      var result = test({parts:[{type:'path',value:'test'},{type:'path',value:'test'}],extension:['.js','.json']});
      expect(result).to.equal('test/test.(js|json)');
    })
    it('should render config data if a path asks for link',function(){
      var test = new pathBuilder({test:'test'});
      var result = test({parts:[{type:'link',value:'test'}]});
      expect(result).to.equal('test');
    })
    require('./lib/pathParts/index.spec.js')();
    require('./lib/extensionAdder/index.spec.js')();
  })
}