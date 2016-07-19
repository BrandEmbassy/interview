import React from "react";

import Detail from "./detail";
import ContactListSite from "./list";

/**
 * @description - base React class of this webpage - Main rendering element that contains everything on page.
 */
export default class Application extends React.Component {
	constructor (props) {
		super(props)
		
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
			 * @description - data is an object with values for all parts of page
			 * @protected
			 * @type Object
			 */
			data: this.props.data
		}

	}
	
	componentWillReceiveProps(newprobs) {

		this.setState({
			data: this.props.data
		})
	}

	/**
	 * @description - checks if active contat is not out of contact array and
	 * change active contact when it is.
	 * @param {Number} last - index of last contact in array
	 */
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
					activeContact={this.state.active}/>

				<Detail
					data={this.props.data}
					activeContact={this.state.active}/>


			</div>

		)
	}

}