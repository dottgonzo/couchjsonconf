'use strict';

module.exports = function(json) {

var urlcouch={}



urlcouch.protocol=json.protocol;
urlcouch.hostname=json.hostname;
urlcouch.port=json.port;
urlcouch.host=json.hostname+':'+json.port;

urlcouch.publink=urlcouch.protocol+'://'+urlcouch.hostname+':'+urlcouch.port;

  if(json.user&&json.password){
    urlcouch.user=json.user;
    urlcouch.password=json.password;
    urlcouch.auth=urlcouch.user+':'+urlcouch.password


urlcouch.mylink=urlcouch.protocol+'://'+urlcouch.auth+'@'+urlcouch.hostname+':'+urlcouch.port;

    if(json.database){
      urlcouch.mydb=urlcouch.mylink+'/'+json.database;


}

      }


  if(json.database){
    urlcouch.db=json.database;

    urlcouch.pubdb=urlcouch.publink+'/'+urlcouch.db


  }


return urlcouch



}
