import React from "react";

import ProfilePic from "./profilePic.js";
import ContactStore from "../stores/contactStore.js"
import * as CLActions from "../actions/clActions.js"
import util from "../utils/util.js"

/**
 * @description - Root Element for right part of site.
 * @todo remove newContact attribute
 */
export default class Detail extends React.Component {
	constructor() {
		super()
		ContactStore.test("Detail")
		this.state = {
			contact : ContactStore.getActive(),
			id : ContactStore.getActiveID(),
			newContact : false
		}
	}
	
	componentWillMount() {
		ContactStore.on("changeActive", () => {
			
			
			this.setState({
				contact : ContactStore.getActive(),
				id : ContactStore.getActiveID(),
				newContact : false
			})
		})
		ContactStore.on("activeChanged", () => {
			let contact = ContactStore.getActive()
			let id = ContactStore.getActiveID()
			
			this.setState({
				contact,
				id,
				newContact : true
			})
		})
	}
	
	render() {
		

		return (
			<div className="detail">
				<DetailItem
					contact={this.state.contact}
					myID={this.state.id}
					newContact={this.state.newContact}/>
					
			</div>

		)
	}
}

/*
 * Represent 1 Item in Detail part of site
 */
class DetailItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			disabled: true,
			contact: {
				fullName: this.props.contact.fullName,
				bio: this.props.contact.bio,
				phone: this.props.contact.phone,
				email: this.props.contact.email,
				myID: this.props.myID,
			},
		};
		//this.state.do_setDiabled = ;
	}

	componentWillMount () {
	}

	componentWillReceiveProps(newprops) {
		
		
		let newState = {
			disabled: !newprops.newContact,
			
		}
		
		if (newprops.contact) {
			newState.contact = {
				fullName: newprops.contact.fullName,
				bio: newprops.contact.bio,
				phone: newprops.contact.phone,
				email: newprops.contact.email,
				myID: newprops.myID
			}
		}
		this.setState(newState);
	}

	


	/**
	 * Sets all Availible fields to editable.
	 */
	setDisabled () {

		this.setState({
			disabled: !this.state.disabled
		});
	}

	changeContactAttribute (name, value) {
		
		let newState = {}
		newState.contact = this.state.contact
		newState.contact[name] = value
		this.setState(newState)
	}

	/**
	 * interface method for Delete Button
	 */
	deleteClicked () {
		if (!this.state.disabled) {
			this.cancelClicked()
		} else {
			CLActions.deleteActive()
		}
		//this.setState({disabled : true})
	}
	
	cancelClicked() {
		CLActions.changeActive(this.state.contact.myID)
	}
	
	/**
	 * method for saving editations of contact shown in Detail
	 */
	saveContact() {
		if (!this.state.disabled)
			CLActions.saveActive(this.state.contact)
		this.setDisabled()
	}
	
	render() {
		
		return (
		<div className="item">

			<DetailItemHeader
				contact={this.state.contact}
				disabledVal={this.state.disabled}
				myID={this.state.myID}
				changeValue={this.changeContactAttribute.bind(this)}/>

			<DetailItemContent
				contact={this.state.contact}
				disabled={this.state.disabled}
				myID={this.state.myID}
				changeValue={this.changeContactAttribute.bind(this)}/>

			<DetailItemFooter
				onclickedit={this.saveContact.bind(this)}
				onclickdelete={this.deleteClicked.bind(this)}
				disabled={this.state.disabled}
				newContact={this.props.newContact ? true : false}
				saveMethod={this.state.saveMethod}/>

		</div>
		)
	}

}

/**
 * Header of Detail - it contains Full Name of contact
 */
class DetailItemHeader extends React.Component {
	render() {
		return (
			<div className="item__header">

				<ProfilePic />

				<Input
					value={this.props.contact.fullName}
					valueName={"fullName"}
					infoName={""}
					infoClass={"name"}
					infoPH={"Full Name"}
					infoType={"text"}
					disabled={this.props.disabledVal}
					myID={this.props.myID}
					changeValue={this.props.changeValue}/>

			</div>
		)
	}
}

class Input extends React.Component {
	
	handleChange(ev) {
		//console.log("Saving is not implemented yet: " + ev.target.value);
		this.props.changeValue(this.props.valueName, ev.target.value)
	}

	render() {

		return (
			<input
				className={this.props.infoClass}
				type={this.props.infoType}
				name={this.props.infoName}
				value={this.props.value}
				placeholder={this.props.infoPH}
				disabled={this.props.disabled}
				onChange={this.handleChange.bind(this)}/>
		)
	}
}

class DetailInputWrapWithLabel extends React.Component {
	
	handleChange(ev) {
		this.props.changeValue(this.props.reportLabel, ev.target.value)
	}
	
	render() {
		let error = ""
		let inputClass = this.props.infoClass
		if (this.props.infoClass === "email" && !util.isEmail(this.props.infoValue) ) {
			error = <span className="error-msg">Invalid E-mail</span>
			inputClass += " error"
		}
		if (this.props.infoClass === "tel" && !util.isPhone(this.props.infoValue) ) {
			error = <span className="error-msg">Invalid Phone</span>
			inputClass += " error"
		}
		return (
			<div className="input-wrap">
				<label forName={this.props.infoClass}>
					{this.props.infoLabel}
				</label>
				{error}
				<input
					className={inputClass}
					type={this.props.infoType}
					name={this.props.infoName}
					value={this.props.infoValue}
					placeholder={this.props.infoPH}
					disabled={this.props.infoEnabled}
					onChange={this.handleChange.bind(this)}/>

				
			</div>
		)
	}
}

class DetailItemContent extends React.Component {

	render() {
		return (
			<div className="item__content">
				<TextAreaWithLabel
					infoName={"bio"}
					infoClass={"bio"}
					reportLabel={"bio"}
					infoPH={"Description"}
					infoValue={this.props.contact.bio}
					infoLabel={"Bio"}
					infoEnabled={this.props.disabled}
					changeValue={this.props.changeValue}/>

				<DetailInputWrapWithLabel
					infoType={"text"}
					infoName={"tel"}
					infoClass={"tel"}
					infoPH={"+XXX XXX XXX XXX"}
					infoValue={this.props.contact.phone}
					infoLabel={"Phone"}
					reportLabel={"phone"}
					infoEnabled={this.props.disabled}
					changeValue={this.props.changeValue}/>

				<DetailInputWrapWithLabel
					infoType={"text"}
					infoName={""}
					infoClass={"email"}
					infoPH={"E-mail"}
					infoValue={this.props.contact.email}
					reportLabel={"email"}
					infoLabel={"E-mail"}
					infoEnabled={this.props.disabled}
					changeValue={this.props.changeValue}/>


			</div>

		)
	}
}

class TextAreaWithLabel extends React.Component {
	handleChange(ev) {
		//console.log("Saving is not implemented yet: " + ev.target.value);
		this.props.changeValue(this.props.reportLabel, ev.target.value)
	}

	render() {

		return (
			<div className="input-wrap">
				<label forName={this.props.infoName}>
					{this.props.infoLabel}
				</label>

                <textarea
					name={this.props.infoName}
					className={this.props.infoLabel}
					placeholder={this.props.infoPH}
					value={this.props.infoValue}
					disabled={this.props.infoEnabled}
					onChange={this.handleChange.bind(this)}>

				</textarea>
			</div>

		)
	}
}

/**
 * Contain all buttons in Detail part of pageX
 */
class DetailItemFooter extends React.Component {
	constructor (props) {
		super(props)
		//console.log("typeofdeleteMethod: " + typeof this.props.onclickdelete)

		this.state = {
			/* EDIT BUTTON ATTRIBUTES */
			editLableFalse: "Edit",
			editClassFalse: "button",
			editLableTrue: "Save",
			editClassTrue: "button button--positive",
			editOnClick: this.props.onclickedit,
			buttonState: false,
			buttonLable: "Edit",
			buttonClass: "button",
			/* DELETE BUTTON ATTRIBUTES */
			delLableFalse: "Delete",
			delClassFalse: "button button--negative",
			delLableTrue: "Cancel",
			delClassTrue: "button button--negative",
			delOnClick: this.props.onclickdelete,
			deleteLable: "Delete",
			deleteClass: "button button--negative"

		}
	}

	componentWillReceiveProps(newprops) {
		if (newprops.newContact)
			this.setNewState(true)
	}

	/**
	 * Edit button click event handler
	 */
	editClicked() {
		this.state.editOnClick(this.state.buttonState)
		this.setNewState()
	}

	/**
	 * Delete button click event handler
	 */
	deleteClicked() {
		this.state.delOnClick()
		if (this.state.buttonState)
			this.setNewState()
	}


	/**
	 * Sets new state of this object baset on actual state or given value.
	 */
	setNewState(val = false) {
		let newState = {}
		if (val || !this.state.buttonState) {
			newState.buttonState = true
			newState.buttonLable = this.state.editLableTrue
			newState.buttonClass = this.state.editClassTrue
			newState.deleteLable = this.state.delLableTrue
			newState.deleteClass = this.state.delClassTrue
		} else {
			newState.buttonState = false
			newState.buttonLable = this.state.editLableFalse
			newState.buttonClass = this.state.editClassFalse
			newState.deleteLable = this.state.delLableFalse
			newState.deleteClass = this.state.delClassFalse
		}

		this.setState(newState)
	}


	render() {
		return (
			<div className="item__footer">

				<ButtonEdit
					onclickMethod={this.editClicked.bind(this)}
					lable={this.state.buttonLable}
					buttonClass={this.state.buttonClass}/>

				<ButtonDelete
					onclickMethod={this.deleteClicked.bind(this)}
					lable = {this.state.deleteLable}
					buttonClass={this.state.deleteClass}/>

			</div>
		)
	}
}

class ButtonEdit extends React.Component {

	render() {

		return (
			<div
				className={this.props.buttonClass}
				onClick={this.props.onclickMethod} >

					{this.props.lable}
			</div>
		)
	}
}

class ButtonDelete extends React.Component {

	render() {
		return (
			<div className={this.props.buttonClass} onClick={this.props.onclickMethod}>
				{this.props.lable}
			</div>
		)
	}
}
