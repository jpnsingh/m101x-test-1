(function () {
    'use strict';

    var mongoose = require('mongoose'),
        schema = require('./schema'),
        util = require('util');

    mongoose.connect('mongodb://localhost:27017/test');

    var User = mongoose.model('User', schema, 'users');

    var user = new User({
        name: 'JPN Singh',
        email: 'jpnsingh86@gmail.com'
    });

    user.save(function (error) {
        if (error) {
            console.log(error);
            process.exit(1);
        }

        User.find({email: 'jpnsingh86@gmail.com'}, function (error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            console.log(util.inspect(docs));
            process.exit(0);
        });
    });
})();
