module.exports = function(json) {
  if(json.user&&json.password){
    json.url=json.protocol+'://'+json.user+':'+json.password+'@'+json.domain+':'+json.port;
    json.data=json.protocol+'://'+json.user+':'+json.password+'@'+json.domain+':'+json.port+'/'+json.database;

  } else{
    json.url=json.protocol+'://'+json.domain+':'+json.port;
    json.data=json.protocol+'://'+json.domain+':'+json.port+'/'+json.database;

  }

return json

}
