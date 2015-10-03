var couchjsonconf=require('../index.js'),
testjsonprivate=require('./confprivate.json'),
testjsonpublic=require('./confpublic.json'),
verb=require('verbo');

verb(couchjsonconf(testjsonprivate.couchdb).url,"info","Test private couchjsonconf url");
verb(couchjsonconf(testjsonprivate.couchdb).data,"info","Test private couchjsonconf url");
verb(couchjsonconf(testjsonprivate.couchdb).protocol,"info","Test private couchjsonconf protocol");

verb(couchjsonconf(testjsonpublic.couchdb).url,"info","Test public couchjsonconf url");
verb(couchjsonconf(testjsonpublic.couchdb).data,"info","Test public couchjsonconf url");
verb(couchjsonconf(testjsonpublic.couchdb).protocol,"info","Test public couchjsonconf protocol");
