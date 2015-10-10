var couchjsonconf=require('../index.js'),
testjsonprivate=require('./confprivate.json'),
testjsonpublic=require('./confpublic.json'),
verb=require('verbo');



verb(couchjsonconf(testjsonprivate.couchdb).href,"info","Test private couchjsonconf url");
verb(couchjsonconf(testjsonprivate.couchdb).host,"info","Test private couchjsonconf host");
verb(couchjsonconf(testjsonprivate.couchdb).protocol,"info","Test private couchjsonconf protocol");

verb(couchjsonconf(testjsonpublic.couchdb).href,"info","Test public couchjsonconf url");
verb(couchjsonconf(testjsonpublic.couchdb).host,"info","Test public couchjsonconf host");
verb(couchjsonconf(testjsonpublic.couchdb).protocol,"info","Test public couchjsonconf protocol");
