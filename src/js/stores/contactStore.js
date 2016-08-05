import { EventEmitter } from "events"

import dispatcher from "../dispatcher.js"
import $ from 'jquery'

class ContactStore extends EventEmitter {
	constructor() {
		super()
		
		this.contacts = [
		{ 
		bio: "Just do it. I know I can be happy.",
		email:"romannikrmajer@gmail.com",
		fullName:"Roman Nikrmajer",
		phone:	"+420 774 276 828" 
		},
		{ 
		bio: "Just do it and be happy.",
		email:"romannikrmajer@gmail.com",
		fullName:"Jasmine Tester",
		phone:	"+420 775 276 828" 
		}
		]
		this.contacts = this.loadContactList()
		this.active = 0
	}

	loadContactList() {
		let data = (function () {
			var json = null;
			$.ajax({
				'async': false,
				'global': false,
				'url': "./data/dataExample.json",
				'dataType': "json",
				'success': function (data) {
					json = data;
				},
				'error': function(xhr, textStatus, errorThrown) {
					console.error(xhr, textStatus, errorThrown)
					alert("Loading contacts from json file failed. More info in error log.")
					throw new Error("Loading contacts from json file failed. More info in error log.")
				}
			});
			return json;
		})(); 
		if (!data.contactList || typeof data.contactList !== "object") {
			
			alert("Bad JSON file content.")
			throw new Error("Bad JSON file - JSON does not contain contactList")
		}
		return data.contactList
	}
	
	getAll() {
		return this.contacts
	}
	
	getActive() {
		
		return this.contacts[this.active]
	}
	
	getActiveID() {
		
		return this.active
	}
	
	changeActive(id) {
		this.active = id;
		
		this.emit("changeActive")
	}
	
	addContact(fullName,bio,phone,email) {
		
		if (typeof fullName !== "string" || 
			typeof bio 		!== "string" || 
			typeof phone    !== "string" || 
			typeof email    !== "string"
			){
			console.error("Not valid contact.");
			return undefined;
		}
		var contact = {
		id : this.contacts.length,
		bio,
		email,
		fullName,
		phone 
		}
		this.contacts.push(contact)
		this.active = this.contacts.length - 1
		
		this.emit("activeChanged")
		
		return this.active;
	}
	
	saveContact (id, fullName, bio, phone, email) {
		var contact = {
			id,
			fullName,
			bio,
			phone,
			email
		}
		this.contacts[id] = contact
		this.emit("activeChanged")
	}
	
	deleteActive() {
		this.contacts.splice(this.active, 1)
		if (this.active !== 0) {
			this.active--
			this.emit("changeActive")
		}
		else {
			this.active = 0
			if (this.contacts.length <= 0 ) {
				this.addContact("","","","")
				return
			}
			
			this.emit("changeActive")
		}
			
	}
	
	saveActive(contact) {
		
		this.contacts[this.active] = contact
		this.emit("changeActive")
	}
	
	handleActions(action) {
		
		switch (action.type) {
			case "ADD_CONTACT" : {
				this.addContact(action.fullName,action.bio, action.phone, action.email)
			}
			break
			case "CHANGE_ACTIVE" : {
				this.changeActive(action.id)
			}
			break
			case "DELETE_ACTIVE" : {
				this.deleteActive()
			}
			break
			case "SAVE_ACTIVE" : {
				this.saveActive(action.contact)
			}
		}
	}
	
	test(msg) {
		console.log("Store working in " + msg)
	}
}

const contactStore = new ContactStore
dispatcher.register(contactStore.handleActions.bind(contactStore))
window.contactStore = contactStore
//window.dispatcher = dispatcher
export default contactStore