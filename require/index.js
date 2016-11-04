(function () {
    'use strict';

    var fn = require('./myFile');
    fn();

    var otherFn = require('./test').other;
    otherFn();
})();
