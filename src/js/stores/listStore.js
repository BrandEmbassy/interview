import { EventEmitter } from "events"
import ContactStore from "./contactStore.js"
import dispatcher from "../dispatcher.js"

class ListStore extends EventEmitter {
	constructor() {
		super()
		this.contacts = ContactStore.getAll()
		this.active = ContactStore.getActiveID()
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
	
	addContact(fullName,id) {
		var contact = {
		id,
		fullName,
		
		}
		this.contacts.push(contact)
		//this.active = this.contacts.length - 1
		this.active = id;
		
		this.emit("addListContact")
	}
	
	changeActive(id) {
		this.active = id;
		console.log("listStore changing" + JSON.stringify(this.contacts))
		this.emit("changeListActive")
	}
	
	handleActions(action) {
		console.log(" list store got an action: " + JSON.stringify(action))
		switch (action.type) {
			case "ADD_CONTACT" : {
				this.addContact(action.fullName, action.id)
				
			}
			case "CHANGE_ACTIVE" : {
				this.changeActive()
			}
		}
	}
	
	refreshData () {
		console.log("refreshData called")
		this.contacts = ContactStore.getAll
		this.active = ContactStore.getActive
	}
	
	test() {
		console.log("contacts " + JSON.stringify(this.contacts))
	}
}

const listStore = new ListStore
dispatcher.register(listStore.handleActions.bind(listStore))
window.listStore = listStore
export default listStore