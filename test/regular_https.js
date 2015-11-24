var expect    = require("chai").expect,
couchjsonconf=require('../index.js'),
verb=require('verbo');

var publicDB={
  "couchdb":{
"protocol":"https",
"hostname":"couchdb.kernel.online",
"port":"443",
"database":"testdb"
}
}
var DB={
  "couchdb":{
"protocol":"https",
"hostname":"couchdb.kernel.online",
"port":"443",
}
}

var privateDB={
  "couchdb":{
    "protocol":"https",
    "hostname":"couchdb.kernel.online",
    "port":"443",
"database":"testdb",
"user":"admin",
"password":"admin"
}
}

var dbJson=couchjsonconf(DB.couchdb);
var privateJson=couchjsonconf(privateDB.couchdb);
var publicJson=couchjsonconf(publicDB.couchdb);

describe("db with https and standard 443 port", function() {
  describe("validation", function() {
    verb(publicJson);
    it("is a json", function() {
      expect(publicJson).to.be.a('object');
      expect(privateJson).to.be.a('object');
      expect(dbJson).to.be.a('object');

    });

    it("contains protocol, host, hostname, port, publink", function() {
      expect(publicJson).to.include.keys('protocol', 'publink', 'host', 'hostname', 'port');
      expect(privateJson).to.include.keys('protocol', 'publink', 'host', 'hostname', 'port');
      expect(dbJson).to.include.keys('protocol', 'publink', 'host', 'hostname', 'port');
    });


  });

  describe("private db", function() {
    it("has properties: auth, user, password, db, pubdb, mydb", function() {
      expect(privateJson).to.include.keys('auth', 'user', 'password', 'db', 'pubdb','mydb');
    });
  });
});
