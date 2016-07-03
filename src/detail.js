/*
	START OF DETAIL CODE
*/

class Detail extends React.Component {
	
	render() {
		
		let contacts = this.props.data.contactList
		
		return (
			<div className="detail">
				<DetailItem 
					data={contacts[this.props.activeContact]} 
					newContact={this.props.data.newContact}
					myID={this.props.activeContact}/>
					
			</div>
		
		)
	}
}

class DetailItem extends React.Component {
	constructor(props){
		super(props);
		let arr = []
		this.state = {
			disabled: true,
			do_setDisabled: this.saveMethod.bind(this),
			do_delete: this.deleteMethod.bind(this),
			data: {
				fullName: this.props.data.fullName,
				bio: this.props.data.bio,
				phone: this.props.data.phone,
				email: this.props.data.email,
				myID: this.props.myID,
				getHeaderState: null,
				getContentState: arr
			},
			saveMethod: this.mySaveMethod.bind(this)
		};
		//this.state.do_setDiabled = ;
	}
	
	componentWillMount () {
		this.setState({
			getContentState: []
		})
	}
	
	setHeaderState(method) {
		
		this.setState({
			getHeaderState: method
		})
	}
	
	setContentState(method) {
		
		//@TODO: I think this is not legal
		this.state.getContentState.push(method)
		
	}
	
	mySaveMethod() {
		let newValues = {}
		//console.log("headerMethod: "+ typeof this.state.getHeaderState)
		let newVals = this.state.getHeaderState()
		for (let i in newVals){
			
			newValues["fullName"] = newVals[i];
		}
		let reportArray = this.state.getContentState
		//console.log("RA.length:" + reportArray.length)
		for (let j = 0; j < reportArray.length; j++){
			let report = this.state.getContentState[j]()
			newValues[report.label] = report.value;
		}
		//console.log("result: " + JSON.stringify(newValues))
		
		//this.state.getContentState()
		controller.savePressed(this.state.data.myID, newValues)
	}
	
	componentWillReceiveProps(newprops) {
		
		this.setState({
			disabled: !newprops.newContact,
			do_setDisabled: this.saveMethod.bind(this),
			do_delete: this.deleteMethod.bind(this),
			data: {
				fullName: newprops.data.fullName,
				bio: newprops.data.bio,
				phone: newprops.data.phone,
				email: newprops.data.email,
				myID: newprops.myID
			}
			
		});
		
		controller.addContactCallback()
	}
	
	/**
	 * Sets all Availible fields to editable.
	 */
	setDisabled () {

		this.setState({
			disabled: !this.state.disabled
		});
	}
	
	saveMethod (val) {
		if (val === true)
			this.mySaveMethod()
		this.setDisabled()
	}
	
	deleteMethod () {
		controller.deletePressed(this.state.data.myID, this.state.disabled)
		this.setDisabled()
	}
	
	render() {
		//console.log("DetailItem: delete method: " + typeof this.state.do_delete)
		return (
		<div className="item">

			<DetailItemHeader 
				data={this.state.data} 
				disabledVal={this.state.disabled} 
				myID={this.state.myID} 
				setStateGetter={this.setHeaderState.bind(this)}/>
				
			<DetailItemContent 
				data={this.state.data} 
				disabled={this.state.disabled} 
				myID={this.state.myID} 
				setStateGetter={this.setContentState.bind(this)}/>
				
			<DetailItemFooter 
				onclickedit={this.state.do_setDisabled} 
				onclickdelete={this.state.do_delete} 
				disabled={this.state.disabled} 
				newContact={this.props.newContact ? true : false}
				saveMethod={this.state.saveMethod}/>
				
		</div>
		)
	}
	
}

class DetailItemHeader extends React.Component {
	render() {
		return (
			<div className="item__header">

				<ProfilePic />
				
				<Input 
					value={this.props.data.fullName} 
					infoName={""} 
					infoClass={"name"} 
					infoPH={"Full Name"} 
					infoType={"text"} 
					disabled={this.props.disabledVal} 
					myID={this.props.myID} 
					setStateGetter={this.props.setStateGetter}/>
					
			</div>
		)
	}
}

class Input extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			value: this.props.value
		}
		
	}
	
	componentWillMount () {
		this.props.setStateGetter(this.reportState.bind(this))
	}
	
	reportState() {
		return this.state
	}
	
	handleChange(ev) {
		//console.log("Saving is not implemented yet: " + ev.target.value);
		this.setState({
			value: ev.target.value
		});
	}
	
	componentWillReceiveProps(newprobs) {
		
		this.setState({
			value: newprobs.value
		});
	}
	
	render() {
		
		return (
			<input 
				className={this.props.infoClass} 
				type={this.props.infoType} 
				name={this.props.infoName} 
				value={this.state.value} 
				placeholder={this.props.infoPH} 
				disabled={this.props.disabled} 
				onChange={this.handleChange.bind(this)}/>
		)
	}
}

class DetailInputWrapWithLabel extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			value: this.props.infoValue,
			label: this.props.infoLabel,
			reportLabel: this.props.reportLabel
		}
	}
	
	componentWillMount() {
		this.props.setStateGetter(this.reportState.bind(this))
		
	}
	
	
	componentWillReceiveProps(newprops) {
		
		this.setState({
			value: newprops.infoValue,
			label: newprops.infoLabel
			
		});
	}
	
	reportState() {
		this.report = {
			value: this.state.value,
			label: this.state.reportLabel
		}
		
		return this.report
	}
	
	handleChange(ev) {
		//console.log("Saving is not implemented yet: " + ev.target.value);
		this.setState({
			value: ev.target.value
		});
	}
	
	render() {
		let error = ""
		let inputClass = this.props.infoClass
		if (this.props.infoClass === "email" && !util.isEmail(this.state.value) ) {
			error = <span className="error-msg">Invalid E-mail</span>
			inputClass += " error"
		}
		if (this.props.infoClass === "tel" && !util.isPhone(this.state.value) ) {
			error = <span className="error-msg">Invalid Phone</span>
			inputClass += " error"
		}
		return (
			<div className="input-wrap">
				<label forName={this.props.infoClass}>
					{this.state.label}
				</label>
				{error}
				<input 
					className={inputClass} 
					type={this.props.infoType} 
					name={this.props.infoName} 
					value={this.state.value} 
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
				<DetailInputWrap 
					infoName={"bio"} 
					infoClass={"bio"} 
					infoPH={"Description"} 
					infoValue={this.props.data.bio} 
					infoLabel={"Bio"} 
					infoEnabled={this.props.disabled} 
					setStateGetter={this.props.setStateGetter}/>
					
				<DetailInputWrapWithLabel 
					infoType={"text"} 
					infoName={"tel"} 
					infoClass={"tel"} 
					infoPH={"+XXX XXX XXX XXX"} 
					infoValue={this.props.data.phone} 
					infoLabel={"Phone"} 
					reportLabel={"phone"} 
					infoEnabled={this.props.disabled} 
					setStateGetter={this.props.setStateGetter}/>
					
				<DetailInputWrapWithLabel 
					infoType={"text"} 
					infoName={""} 
					infoClass={"email"} 
					infoPH={"E-mail"} 
					infoValue={this.props.data.email} 
					reportLabel={"email"} 
					infoLabel={"E-mail"} 
					infoEnabled={this.props.disabled} 
					setStateGetter={this.props.setStateGetter}/>
				
				
			</div>
		
		)
	}
}

class DetailInputWrap extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			value: this.props.infoValue,
			label: this.props.infoClass
		}
		
	}
	
	componentWillMount() {
		this.props.setStateGetter(this.reportState.bind(this))
		
	}
	
	componentWillReceiveProps(newprops) {
		
		this.setState({
			value: newprops.infoValue,
			label: newprops.infoClass
		});
	}
	
	reportState() {
		return this.state
	}
	
	handleChange(ev) {
		//console.log("Saving is not implemented yet: " + ev.target.value);
		this.setState({
			value: ev.target.value
		});
	}
	
	render() {
		
		return (
			<div className="input-wrap">
				<label forName={this.props.infoName}>
					{this.props.infoLabel}
				</label>
				
                <textarea 
					name={this.props.infoName} 
					className={this.state.label} 
					placeholder={this.props.infoPH} 
					value={this.state.value} 
					disabled={this.props.infoEnabled} 
					onChange={this.handleChange.bind(this)}>
					
				</textarea>
			</div>
		
		)
	}
}

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
	
	editClicked() {
		this.state.editOnClick(this.state.buttonState)
		this.setNewState()
	}
	
	deleteClicked() {
		this.state.delOnClick()
		if (this.state.buttonState)
			this.setNewState()
	}
	
	
	
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


/*
	END OF DETAIL CODE
*/

