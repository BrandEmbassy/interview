import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
//import Controller from "./utils/controller";

import Application from "./components/application";

/*
 * Connects this React App to HTML content
 */
 
 /**
 data={controller.data}
 */
ReactDOM.render(
			<Application data={controller.data}/>, 	//<div><ContactListSite /><Detail /></div>,
			document.getElementById("app")					//document.getElementById("app")
		);


/*
	END OF CONTACTLIST CODE
*/


