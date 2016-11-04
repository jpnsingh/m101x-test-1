(function () {
    'use strict';

    var mongodb = require('mongodb');

    var connectionUri = 'mongodb://localhost:27017/test';

    mongodb.MongoClient.connect(connectionUri, function (error, db) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        var doc = {
            title: 'Jaws',
            year: 1975,
            director: '',
            rating: 'PG'
        };

        db.collection('movies').insert(doc, function (error, result) {
            if (error) {
                console.log(error);
                process.exit(1);
            }

            db.collection('movies').find().toArray(function (error, docs) {
                if (error) {
                    console.log(error);
                    process.exit(1);
                }

                console.log('Found docs: ');
                docs.forEach(function (doc) {
                    console.log(JSON.stringify(doc));
                });
                process.exit(0);
            });
        });
    });
})();
