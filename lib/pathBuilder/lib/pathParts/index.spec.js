var expect = require('chai').expect;
var pathParts = require('./index');

module.exports = pathPartsSpec;

function pathPartsSpec() {
  return describe('pathParts',function(){
    it('should render a path containing the part value if the type is path',function(){
      var test = new pathParts();
      var result = test({type:'path',value:'test'});
      expect(result).to.equal('test');
    })
    it('should render a path containing the config key linked in the part value if the type is link',function(){
      var test = new pathParts({test:'linkedtest'});
      var result = test({type:'link',value:'test'});
      expect(result).to.equal('linkedtest');
    })
    it('should render a file glob if the type is glob and subFolders is undefined',function(){
      var test = new pathParts();
      var result = test({type:'glob'});
      expect(result).to.equal('*');
    })
    it('should render a file glob if the type is glob and subFolders is set to false',function(){
      var test = new pathParts();
      var result = test({type:'glob',subFolders:false});
      expect(result).to.equal('*');
    })
    it('should render a file glob with subfolder recursivity if the type is glob and subFolders is set to true',function(){
      var test = new pathParts();
      var result = test({type:'glob',subFolders:true});
      expect(result).to.equal('**/*');
    })
    require('./lib/getParamFromString/index.spec.js')();
  })
}