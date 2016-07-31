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
		phone:	"+420 775 276 828" 
		}
		]
		this.active = 0
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
//window.contactStore = contactStore
//window.dispatcher = dispatcher
export default contactStore