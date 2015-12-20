var expect = require('chai').expect;
var getParamFromString = require('./index');
module.exports = getParamFromStringSpec;
  
  function getParamFromStringSpec () {
  return describe('getParamFromString',function(){
  it('should get the asked linked param',function(){
    var result = getParamFromString('test',{test:'test'});
    expect(result).to.be.a('string');
    expect(result).to.equal('test')
  })
  it('should get the asked pointy linked param',function(){
    var result = getParamFromString('test.test',{test:{test:'test'}});
    expect(result).to.be.a('string');
    expect(result).to.equal('test')
  })
  it('should get the asked braced linked param',function(){
    var result = getParamFromString('test[0]',{test:['test']});
    expect(result).to.be.a('string');
    expect(result).to.equal('test')
  })
})
}