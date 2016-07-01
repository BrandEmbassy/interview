describe('util', function() {

	var util = require('../src/util');
	var assert = require('chai').assert;

	describe('isEmail', function() {

		it('should return true if email is valid', function() {
			assert.ok(util.isEmail('development@brandembassy.com'));
		});

		it('should return false if email is not valid', function() {
			assert.notOk(util.isEmail('development@brandembassy'));
		});
	});

	describe('isPhone', function() {

		it('should return true if phone number has 9 digits', function() {
			assert.ok(util.isPhone('608123456'));
		});
	});

});
