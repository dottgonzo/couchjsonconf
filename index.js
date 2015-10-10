'use strict';
var URL=require('url-parse');
module.exports = function(json) {
  if(json.user&&json.password){
    var url=new URL(json.protocol+'://'+json.user+':'+json.password+'@'+json.domain+':'+json.port+'/'+json.database);
      } else{

    var url=new URL(json.protocol+'://'+json.domain+':'+json.port+'/'+json.database);

  }

return url

}
