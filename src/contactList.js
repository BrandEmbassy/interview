/*
	START OF CONTACTLIST CODE
*/


/**
 * @description - base React class of this webpage - Main rendering element that contains everything on page.
 */
class Application extends React.Component {
	constructor (props) {
		super (props);
		/**
		 * @private
		 * @description - defines all state related values, that needs to be watched 
		 * and if changed Class and all its childs should rerender
		 */
		this.state = {
			/**
			 * @description - defined which of contats is active right now.
			 * @type Number
			 * @protected
			 */
			active: 0, 
			/**
			 * @description - defines method that changes active contact number.
			 * @protected
			 * @type Function
			 */
			changeActive: this.myChangeActive.bind(this),
			/**
			 * @description - data is an object with values for all parts of page
			 * @protected
			 * @type Object
			 */
			data: this.props.data
		}
		
		// Application is now defined so we can finally give Controller it's reference.
		// It needs it for proper work with data.
		controller.setApp(this)
	}
	
	componentWillReceiveProps(newprobs) {
		
		this.setState({
			data: this.props.data
		})
		this.myChangeActive(this.state.active)
	}
	
	checkAfterDelete (last) {
		if (this.state.active > last) {
			this.setState({active: last})
		}
	}
	
	render() {
		
		return (
			<div className="app">
				<ContactListSite 
					data={this.state.data} 
					activeContact={this.state.active} 
					changeActive={this.state.changeActive}/>
					
				<Detail 
					data={this.props.data} 
					activeContact={this.state.active}/>
					
					
			</div>
		
		)
	}
	
	/**
	 * @decsription - Method change this.state.active to new value and triggers rerendering of all related React objects
	 * @param {Number} val - new value for this.state.active
	 * @returns {undefined}
	 */
	myChangeActive(val) {
		let maxVal = this.props.data.contactList.length;
		
		if (val < 0 || val >= maxVal) {
			return
		} 
		this.setState({
			active: val
		});
		
		
	}
	
	
	
	
	
}

ReactDOM.render(
			<Application data={controller.data}/>, 	//<div><ContactListSite /><Detail /></div>,
			document.body					//document.getElementById("app")	
		);

		
/*
	END OF CONTACTLIST CODE
*/

