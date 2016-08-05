describe('contactStore', function() {

	var store = require('../src/js/stores/contactStore');
	var assert = require('chai').assert;
	
	//I don't fully understand why there has to be "default" in here...
	var contactCount = store.default.contacts.length;
	
	describe('store.addContact', function() {
		var contact = {
				fullName : "My first",
				bio : "test",
				phone : "123456789",
				email : "valid@contact.com"
			}
		
		it('should add new Contact', function() {
			
			
			var returnVal = store.default.addContact(contact.fullName, contact.bio, contact.phone, contact.email);
			assert.equal(returnVal, store.default.contacts.length-1, "contact added")
			
			//store.default.changeActive(contactCount);
			
			//assert.equal(store.default.getActive(), contact, "contact saved successfully")
			
			
		});

		it('should add contact with right fullName', function() {
			assert.equal(store.default.getActive().fullName, contact.fullName, "contact had same name");
		});
		
		it('should add contact with right bio', function() {
			assert.equal(store.default.getActive().bio, contact.bio, "contact had same bio");
		});
		
		it('should add contact with right phone', function() {
			assert.equal(store.default.getActive().phone, contact.phone, "contact had same phone");
		});
		
		it('should add contact with right email', function() {
			assert.equal(store.default.getActive().email, contact.email, "contact had same email");
		});
		
		
		it('should failed when one of given params is undefined', function () {
			var len = store.default.contacts.length;
			var returnVal = store.default.addContact("Mocha Chai", "some bio", "123456789", undefined);
			assert.isUndefined(returnVal, "should return undefined");
			assert.equal(store.default.contacts.length, len,'should have same number of contacts when previous addContact failed');
		});
		
	});

	describe('getActiveID', function() {
		
		
		it('should return same ID', function () {
			var activeID = store.default.getActiveID();
			var secondContact = {
				fullName : "My second",
				bio : "contact",
				phone : "111222333",
				email : "valid@email.com"
			}
			var cs = secondContact;
			var contactIndex = store.default.addContact(cs.fullName, cs.bio, cs.phone, cs.email);
		
			assert.equal(store.default.active, store.default.getActiveID(), "should be ID of active contact");
		});

	});
	
	describe('getActive', function () {
		
		it ('should return some contact', function () {
			assert.strictEqual(store.default.getActive(),store.default.contacts[store.default.active], "this should be same object");
		});
	});
	
	describe('deleteActive', function () {
		it('should delete active contact from contacts', function () {
			store.default.changeActive(store.default.contacts.length-1);
			var active = store.default.getActiveID();
			store.default.deleteActive();
			assert.isUndefined(store.default.contacts[active], "last contact should be deleted");
		});
		
		it("should delete active contact from contacts and move other contact on it's place in array", function () {
			store.default.changeActive(0);
			var active = store.default.getActiveID();
			store.default.deleteActive();
			assert.isDefined(store.default.contacts[active], "first contact should be replaced by second one");
		});
	});
	
	
});