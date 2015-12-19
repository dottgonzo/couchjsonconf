'use strict';

function couchUrl(json) {

  if (json.protocol&&json.port){
    this.protocol=json.protocol;
    this.port=json.port;
  } else if (!json.protocol&&!json.port) {
    this.protocol='http';
    this.port=80;
  } else if (!json.protocol&&json.port&&json.port==80) {
    this.protocol='http';
    this.port=json.port;
  } else if (json.protocol&&json.protocol=='http'&&!json.port) {
    this.port=80;
    this.protocol=json.protocol;
  } else if (!json.protocol&&json.port&&json.port==443) {
    this.protocol='https';
    this.port=json.port;
  } else if (json.protocol&&json.protocol=='https'&&!json.port) {
    this.port=443;
    this.protocol=json.protocol;
  } else if (json.protocol) {
    console.error('invalid protocol');
  } else if (json.port) {
    console.error('invalid port');
  }

  if (json.hostname){
    this.hostname=json.hostname;
  } else {
    console.error('no hostname specified');
  }

  if(this.protocol=='https'&&this.port==443){
    this.host=this.hostname;
    this.publink=this.protocol+'://'+this.hostname;
  } else if(this.protocol=='http'&&this.port==80){
    this.host=this.hostname;
    this.publink=this.protocol+'://'+this.hostname;
  } else{
    this.host=this.hostname+':'+this.port;
    this.publink=this.protocol+'://'+this.hostname+':'+this.port;
  }

  if(json.user&&json.password){
    this.user=json.user;
    this.password=json.password;
    this.auth=this.user+':'+this.password
    if(this.protocol=='https'&&this.port==443){
      this.mylink=this.protocol+'://'+this.auth+'@'+this.hostname;
    } else if(this.protocol=='http'&&this.port==80){
      this.mylink=this.protocol+'://'+this.auth+'@'+this.hostname;
    } else{
      this.mylink=this.protocol+'://'+this.auth+'@'+this.hostname+':'+this.port;
    }
    if(json.database){
      this.mydb=this.mylink+'/'+json.database;
    }
  }


  if(json.database){
    this.db=json.database;
    this.pubdb=this.publink+'/'+this.db
  }
}

couchUrl.prototype.user = function (user,password,db) {

  if(db){
    return this.protocol+'://'+user+':'+password+'@'+this.host+'/'+db
  }else {
    return this.protocol+'://'+user+':'+password+'@'+this.host
  }



};

module.exports=couchUrl
