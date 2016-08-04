import React from "react";

import Detail from "./detail";
import ContactListSite from "./list";

/**
 * @description - base React class of this webpage - Main rendering element that contains everything on page.
 */
export default class Application extends React.Component {
		
	render() {

		return (
			<div className="app">
				<ContactListSite />
				<Detail />
			</div>
		)
	}

}