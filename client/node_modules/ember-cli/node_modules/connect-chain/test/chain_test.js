var expect = require('expect.js');
var chain = require('../');

describe('chain', function() {
  describe('empty chain', function() {
    it('passes through', function(done) {
      chain()({}, {}, function (err) {
        expect(err).to.be();
        done();
      });
    });
  });

  describe('one middleware', function() {
    it('calls middleware', function() {
      var calls = [];
      function one (req, res, next) {
        calls.push('one');
        next();
      }
      var error;
      chain(one)({}, {}, function (err) {
        error = err;
      });
      expect(error).to.be();
      expect(calls).to.eql(['one']);
    });
  });

  describe('happy chain', function() {
    it('calls each middleware', function() {
      var calls = [];
      function one (req, res, next) {
        calls.push('one');
        next();
      }
      function two (req, res, next) {
        calls.push('two');
        next();
      }
      var error;
      chain(one, two)({}, {}, function (err) {
        error = err;
      });
      expect(error).to.be();
      expect(calls).to.eql(['one', 'two']);
    });
  });

  describe('unhappy chain', function() {
    it('aborts chain and passes error along', function() {
      var calls = [];
      function one (req, res, next) {
        calls.push('one');
        next(new Error('boom'));
      }
      function two (req, res, next) {
        calls.push('two');
        next();
      }
      var error;
      chain(one, two)({}, {}, function (err) {
        error = err;
      });
      expect(error).to.be.ok();
      expect(error.message).to.be('boom');
      expect(calls).to.eql(['one']);
    });
  });

  describe('throwing chain', function() {
    it('aborts chain and passes caught error along', function() {
      var calls = [];
      function one (req, res, next) {
        calls.push('one');
        throw new Error('boom');
      }
      function two (req, res, next) {
        calls.push('two');
        next();
      }
      var error;
      chain(one, two)({}, {}, function (err) {
        error = err;
      });
      expect(error).to.be.ok();
      expect(error.message).to.be('boom');
      expect(calls).to.eql(['one']);
    });
  });

});
