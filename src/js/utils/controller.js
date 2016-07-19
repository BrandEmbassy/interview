


var Controller = function () {
	
	this.testMessage = "Go for it.";
	this.iteration = 0;
	this.data = null;
	this.app = null;
	
	this.cron("test");
}

Controller.prototype.fireAlert = function (time) {
	setInterval(this.cron.bind(this),time, this.testMessage);
};

/**
 * @description - 	this method was for testing purposes of ECMAScript6 syntax only and now it is not used.
 *					It will be deleted in final version of project.
 *
 */
Controller.prototype.cron = function (message) {
	this.iteration++;
	console.log(message + " " + this.iteration);
};

Controller.prototype.getJson = function () {
	this.data = (function () {
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': "./data/dataExample.json",
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		});
    return json;
	})(); 
	this.data.newContact = false;
	//this defines if we can edit this element or not
}

Controller.prototype.savePressed = function (index, newObj) {
	//console.log(JSON.stringify(this.data));
	//console.log(JSON.stringify(newObj));
	
	for (let i in newObj) {
		this.data.contactList[index][i] = newObj[i];
		//console.log("putting " + i + " with value: " + newObj[i]);
	}
	//console.log("save Pressed:" + JSON.stringify(this.data));
	this.rerenderApp();
}

Controller.prototype.deletePressed = function (index, typeOfDelete) {
	//console.log("Controller.deletePressed " + typeOfDelete);
	if (typeOfDelete) {
		this.data.contactList.splice(index,1);
		
		this.app.checkAfterDelete(this.data.contactList.length - 1);
		//force app to rerender
		this.rerenderApp();
	} else {
		this.savePressed(index, {});
	}
}

Controller.prototype.rerenderApp = function () {
	if (this.app !== null) {
			this.app.setState({data: this.data});
	}
}

Controller.prototype.addContact = function () {
	let index = -1;
	let newContact = {
		fullName: "",
		bio: "",
		phone: "",
		email: ""
		
	};
	index = this.data.contactList.push(newContact) - 1;
	this.data.newContact = true;
	//console.log("new Contact index: " + index);
	this.rerenderApp();
	return index;
}

Controller.prototype.addContactCallback = function() {
	this.data.newContact = false;
}

Controller.prototype.setApp = function (app) {
	this.app = app;
	//console.log("APP SET")
}

window.controller = new Controller();
//controller.getJson();