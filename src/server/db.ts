'use strict';

import Datastore = require('nedb');

let path = __dirname + '/database.db';

console.log(path);

var db = new Datastore({
    filename: path
});

db.loadDatabase(function (err) {
    console.log(err);
});

var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

db.insert(doc, function (err, newDoc) {
  console.log(err);
  //console.log(newDoc);
});


db.find({}, function (err, docs) {
  console.log(docs);
});
