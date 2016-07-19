import { EventEmitter } from "events"

import dispatcher from "../dispatcher.js"

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
		phone:	"+420 774 276 828" 
		}
		]
		this.active = 0
	}
	
	getAll() {
		return this.contacts
	}
	
	getActive() {
		console.log("get active returns: " + JSON.stringify(this.contacts[this.active]))
		return this.contacts[this.active]
	}
	
	getActiveID() {
		
		return this.active
	}
	
	addContact(fullName,bio,phone,email) {
		var contact = {
		id : this.contacts.length,
		bio,
		email,
		fullName,
		phone 
		}
		this.contacts.push(contact)
		//this.active = this.contacts.length - 1
		this.active = this.contacts.length - 1
		
		this.emit("change")
	}
	
	changeActive(id) {
		this.active = id;
		
		this.emit("change")
	}
	
	handleActions(action) {
		console.log("store got an action: " + JSON.stringify(action))
		switch (action.type) {
			case "ADD_CONTACT" : {
				this.addContact(action.fullName,action.bio, action.phone, action.email)
			}
			case "CHANGE_ACTIVE" : {
				this.changeActive(action.id)
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
window.dispatcher = dispatcher
export default contactStore