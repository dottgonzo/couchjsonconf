var couchjsonconf=require('../index.js'),
testjsonprivate=require('./confprivate.json'),
testjsonpublic=require('./confpublic.json'),
verb=require('verbo');



verb(couchjsonconf(testjsonprivate.couchdb).protocol,"info","Test private couchjsonconf protocol");
verb(couchjsonconf(testjsonprivate.couchdb).hostname,"info","Test private couchjsonconf hostname");
verb(couchjsonconf(testjsonprivate.couchdb).host,"info","Test private couchjsonconf host");
verb(couchjsonconf(testjsonprivate.couchdb).mydb,"info","Test private couchjsonconf mydb");
verb(couchjsonconf(testjsonprivate.couchdb).mylink,"info","Test private couchjsonconf mylink");
verb(couchjsonconf(testjsonprivate.couchdb).publink,"info","Test private couchjsonconf publink");
verb(couchjsonconf(testjsonprivate.couchdb).pubdb,"info","Test private couchjsonconf pubdb");


verb(couchjsonconf(testjsonpublic.couchdb).host,"info","Test public couchjsonconf host");
verb(couchjsonconf(testjsonpublic.couchdb).protocol,"info","Test public couchjsonconf protocol");
