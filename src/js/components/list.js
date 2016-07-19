import React from "react";

import ProfilePic from "./profilePic.js";
import ContactStore from "../stores/contactStore.js"
import * as CLActions from "../actions/clActions.js"
/*
	START OF LIST CODE
*/



/**
 * @describe - Main Element of contact overwiev
 */
export default class ContactListSite extends React.Component{
	constructor() {
		super()
		ContactStore.test("ContactListSite")
		this.state = {}
		this.state.data = {}
		this.state.data.contactList = ContactStore.getAll()
		this.state.active = 0
		
	}
	
	componentWillMount() {
		ContactStore.on("change", () => {
			this.setState({
				data : {contactList: ContactStore.getAll()},
				active : ContactStore.getActiveID()
			})
		})
	}
	
	render() {

		return (
			<div className="list">

			<ListHeader />
			<ListContent
				data={this.state.data}
				active={this.state.active}/>

			<ListFooter changeActive={this.props.changeActive}/>
			</div>
		);
	}
}

/**
 * Defines headline of contact overview
 */
class ListHeader extends React.Component {
	render() {
		return (
			<div className="list__header">
				<div className="heading">
					Contact List
				</div>
			</div>
		)
	}
}

/**
 * Holds content of contactList overview
 */
class ListContent extends React.Component {
	render() {
		let contats = this.props.data.contactList
		let id = 0
		let activeID = this.props.active
		
		console.log(this.props.data.contactList)
		
		/*
		
		
		*/
		return (
			<div className="list__content">
				{
					contats.map(function (contats, i) {
						return <Item
									myID={i}
									key={i}
									data={contats}
									active={activeID}/>
					})
				}


			</div>

		)
	}
}

class Item extends React.Component {
	reportClick() {
		CLActions.changeActive(this.props.myID)
		
	}

	render() {

		let itemClass = null;

		if (this.props.myID === this.props.active){
			itemClass = "item item--active";

		} else {
			itemClass = "item";

		}


		return (

			<div
				className={itemClass}
				onClick={this.reportClick.bind(this)} >
				<ItemIn data={this.props.data}/>
			</div>

		)
	}
}

class ItemIn extends React.Component {
	render() {
		return (
			<div className="in">
			<ProfilePic />
				{this.props.data.fullName}
			</div>

		)
	}
}

class ListFooter extends React.Component {
	render() {
		return (
			<div className="list__footer">
				<AddBtn changeActive={this.props.changeActive}/>
			</div>

		)

	}
}

class AddBtn extends React.Component {

	addContact() {
		CLActions.addNewContact()
		/*let index = controller.addContact()
		this.props.changeActive(index)
		console.log(index)
		*/
	}

	render() {
		return (
			<div className="add-bttn" onClick={this.addContact.bind(this)}>
				<span className="in">
					Add new contact
			    </span>
			</div>

		)
	}
}

/*
	END OF LIST CODE
*/
