describe('util', function() {

	var util = require('../src/util');
	var assert = require('chai').assert;

	describe('isEmail', function() {

		it('should return true if email is valid', function() {
			assert.ok(util.default.isEmail('development@brandembassy.com'));
		});

		it('should return false if email is not valid', function() {
			assert.notOk(util.default.isEmail('development@brandembassy'));
		});
	});

	describe('isPhone', function() {

    it('should return true if phone number has 9 digits', function() {
			assert.ok(util.default.isPhone('123456789'));
		});

		it('should return false if phone number has 8 digits', function() {
			assert.notOk(util.default.isPhone('12345678'));
		});

	});

});
