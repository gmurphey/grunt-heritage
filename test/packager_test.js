'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.packager = {
  setUp: function(done) {
    done();
  },

  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/bower.json');
    var expected = grunt.file.readJSON('test/expected/bower.json');
    test.deepEqual(actual, expected, 'the correct properties are overwritten in the children');

    test.done();
  }
};
