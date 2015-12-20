var getParamFromString = require('./lib/getParamFromString')

module.exports = pathParts;

function pathParts (config) {
  
  return function (parts) {
    
    var path = '';
    
    if (parts.type) {
 
      switch(parts.type) {
   
        case "path":
     
          path = parts.value;
     
          break;
   
        case "link":
     
          path =  getParamFromString (parts.value,config);
     
          break;
   
        case "glob":
     
         if (parts.subFolders) {
           
            path = '**/*'
            
          } else {
            
            path= '*'
            
          };
     
          break;
     }
      
   }
    
  return path;
    
  }
}