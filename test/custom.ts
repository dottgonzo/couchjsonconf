let expect    = require("chai").expect;
import Couchjsonconf = require("../index");
let verb = require("verbo");

let publicDB = {
  "couchdb": {
    "protocol": "http",
    "hostname": "couchdb.kernel.online",
    "port": 8080,
    "db": "testdb"
  }
};
let DB = {
  "couchdb": {
    "protocol": "http",
    "hostname": "couchdb.kernel.online",
    "port": 8080,
  }
};

let privateDB = {
  "couchdb": {
    "protocol": "http",
    "hostname": "couchdb.kernel.online",
    "port": 8080,
    "db": "testdb",
    "user": "admin",
    "password": "admin"
  }
};

let dbJson = new Couchjsonconf(DB.couchdb);
let privateJson = new Couchjsonconf(privateDB.couchdb);
let publicJson = new Couchjsonconf(publicDB.couchdb);

describe("db with https and standard 443 port", function() {
  describe("validation", function() {
    verb(privateJson);

    verb(publicJson.for("aa", "mm"));
    verb(publicJson.for("aa", "mm", "zz"));
    it("is a json", function() {
      expect(publicJson).to.be.a("object");
      expect(privateJson).to.be.a("object");
      expect(dbJson).to.be.a("object");

    });

    it("contains protocol, host, hostname, port, publink", function() {
      expect(publicJson).to.include.keys("protocol", "publink", "host", "hostname", "port");
      expect(privateJson).to.include.keys("protocol", "publink", "host", "hostname", "port");
      expect(dbJson).to.include.keys("protocol", "publink", "host", "hostname", "port");
    });


  });

  describe("private db", function() {
    it("has properties: auth, user, password, db, pubdb, mydb", function() {
      expect(privateJson).to.include.keys("auth", "user", "password", "db", "pubdb","mydb");
    });
  });
});
