(function () {
    var assert = require('assert');

    describe('testing a feature', function () {
        it('works fine', function () {
            assert.equal('a', 'a');
        });

        it('fails gracefully', function () {
            assert.throws(function () {
                throw 'Error!';
            });
        });
    });

    describe('testing other feature', function () {
        it('async', function (done) {
            setTimeout(function () {
                done();
            }, 25);
        });
    });
})();
