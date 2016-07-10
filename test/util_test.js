describe('util', function() {

	var util = require('../src/util');
	var assert = require('chai').assert;

	describe('isEmail', function() {

		it('should return true if email is valid', function() {
			assert.ok(util.isEmail('development@brandembassy.com'));
		});

		it('should return false if email lacks @', function() {
			assert.notOk(util.isEmail('developmentbrandembassy.com'));
		});

		it('should return false if email lacks domain suffic', function() {
			assert.notOk(util.isEmail('development@brandembassycom'));
		});

		it('should return false if email lacks recognized domain suffic', function() {
			assert.notOk(util.isEmail('development@brandembassy.invalid'));
		});

		it('should return false if null passed in', function() {
			assert.notOk(util.isEmail(null));
		});

		it('should return false if nothing passed in', function() {
			assert.notOk(util.isEmail());
		});

		it('should return false if undefined passed in', function() {
			var undef;
			assert.notOk(util.isEmail(undef));
		});

	});

	describe('isPhone', function() {

		it('should return true if phone number has 9 digits', function() {
			assert.ok(util.isPhone("123456789"))
		});

		it('should return false if phone number doesn\'t have 9 digits', function() {
			assert.notOk(util.isPhone("1234567890"))
		});

		it('should return false if phone number contains non-numerical characters', function() {
			assert.notOk(util.isPhone("12345678a"))
		});

		it('should return false if null passed in', function() {
			assert.notOk(util.isPhone(null));
		});

		it('should return false if nothing passed in', function() {
			assert.notOk(util.isPhone());
		});

		it('should return false if undefined passed in', function() {
			var undef;
			assert.notOk(util.isPhone(undef));
		});
	});

});