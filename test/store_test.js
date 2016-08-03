describe('contactStore', function() {

	var store = require('../src/js/stores/contactStore');
	var assert = require('chai').assert;
	var contactCount = store.contacts.length;
	
	describe('isEmail', function() {
		
		
		it('should add new Contact', function() {
			var contact = {
				fullName : "My first",
				bio : "test",
				phone : "123456789",
				email : "valid@contact.com"
			}
			store.addContact(contact.fullName, contact.bio, contact.phone, contact.email);
			assert.equal(store.contacts.length, contactCount+1, "contact added")
			
			store.changeActive(contactCount);
			
			assert.equal(store.getActive, contact, "contact saved successfully")
			
			
		});

		it('should return false if email is not valid', function() {
			assert.notOk(util.isEmail('development@brandembassy.com'));
		});
	});

	describe('isPhone', function() {

		it('should return true if phone number has 9 digits');

	});

});