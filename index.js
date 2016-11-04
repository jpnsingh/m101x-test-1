(function () {
    'use strict';

    var _ = require('underscore'),
        mongodb = require('mongodb');

    _.each([1, 2, 3], function (e) {
        console.log(e);
    });

    var uri = 'mongodb://localhost:27017/test';

    mongodb.MongoClient.connect(uri, function (error, db) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        db.collection('names').find().toArray(function (error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }

            console.log('Found names: ');
            docs.forEach(function (doc) {
                console.log(JSON.stringify(doc));
            });
            process.exit(0);
        });

        // db.collection('names').insert({name: 'test'}, function (error, result) {
        //    if (error) {
        //        console.log(error);
        //        process.exit(1);
        //    }
        //
        //    console.log('Inserted ' + JSON.stringify(result) + ' successfully');
        //    process.exit(0);
        // });
    });
})();
