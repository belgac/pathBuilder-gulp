var expect = require('chai').expect;
var pathsBuilderGulp = require('./index');

describe('pathsBuilderGulp',function(){
  it('should render one path if one defining path object is given',function(){
    var result = pathsBuilderGulp(
      [{parts:[{type:'path',value:'./test'}]}]
    );
    expect(result).to.be.a('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.equal('./test');
  })
  it('should render two paths if two defining path objects are given',function(){
    var result = pathsBuilderGulp(
      [{parts:[{type:'path',value:'./test'}]},{parts:[{type:'path',value:'./test'}]}]
    );
    expect(result).to.be.a('array');
    expect(result).to.have.length(2);
    expect(result[0]).to.equal('./test');
    expect(result[1]).to.equal('./test');
  })
  it('should render config data if a path asks for link',function(){
    var result = pathsBuilderGulp(
      [{parts:[{type:'link',value:'test'}]}],
      {test:'test'}
    );
    expect(result).to.be.a('array');
    expect(result).to.have.length(1);
    expect(result[0]).to.equal('test');
  })
  require('./lib/pathBuilder/index.spec.js')();
})