'use strict';

module.exports = function(json) {

var urlcouch={}



urlcouch.protocol=json.protocol;
urlcouch.hostname=json.hostname;
urlcouch.port=json.port;


if(urlcouch.protocol=='https'&&urlcouch.port==443){
  urlcouch.host=json.hostname;

  urlcouch.publink=urlcouch.protocol+'://'+urlcouch.hostname;

} else if(urlcouch.protocol=='http'&&urlcouch.port==80){
  urlcouch.host=json.hostname;

  urlcouch.publink=urlcouch.protocol+'://'+urlcouch.hostname;

} else{
  urlcouch.host=json.hostname+':'+json.port;

  urlcouch.publink=urlcouch.protocol+'://'+urlcouch.hostname+':'+urlcouch.port;

}

  if(json.user&&json.password){
    urlcouch.user=json.user;
    urlcouch.password=json.password;
    urlcouch.auth=urlcouch.user+':'+urlcouch.password


    if(urlcouch.protocol=='https'&&urlcouch.port==443){
      urlcouch.mylink=urlcouch.protocol+'://'+urlcouch.auth+'@'+urlcouch.hostname;

    } else if(urlcouch.protocol=='http'&&urlcouch.port==80){
      urlcouch.mylink=urlcouch.protocol+'://'+urlcouch.auth+'@'+urlcouch.hostname;

    } else{
      urlcouch.mylink=urlcouch.protocol+'://'+urlcouch.auth+'@'+urlcouch.hostname+':'+urlcouch.port;

    }







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
