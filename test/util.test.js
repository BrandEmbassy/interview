import util from '../src/util';

describe('util', function() {

	describe('isEmail', function() {

		test('should return true if email is valid', function() {
			expect(util.isEmail('development@brandembassy.com')).toBeTruthy()
		});

		test('should return false if email is not valid', function() {
			expect(util.isEmail('development@brandembassy.com')).toBeTruthy()
		});
	});

	describe('isPhone', function() {

		it('should return true if phone number has 9 digits');

	});

});
