describe('util', function() {

	var util = require('../src/js/utils/util.js');
	var assert = require('chai').assert;

	describe('isEmail', function() {

		it('should return true if email is valid', function() {
			assert.ok(util.isEmail('development@brandembassy.com'));
		});

		it('should return false if email is not valid', function() {
			assert.notOk(util.isEmail('development@brandembassy.c'));
		});
	});

	describe('isPhone', function() {

		it('should return true if phone number has 9 digits', function () {
			assert.ok(util.isPhone('123456789'));
		});
		it('should return false if phone number has other characters than 9 digits', function () {
			assert.notOk(util.isPhone('123 456 789'));
		});
	});

});

