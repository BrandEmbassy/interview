var Controller = function () {
	
	this.testMessage = "Go for it.";
	this.iteration = 0;
	this.data = null;
	this.app = null;
}

Controller.prototype.fireAlert = function (time) {
	setInterval(this.cron.bind(this),time, this.testMessage);
};

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
			'url': "./js/dataExample.json",
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		});
    return json;
	})(); 
	
	//this defines if we can edit this element or not
}

Controller.prototype.savePressed = function (index, newObj) {
	console.log(JSON.stringify(this.data));
	console.log(JSON.stringify(newObj));
	
	for (let i in newObj) {
		this.data.contactList[index][i] = newObj[i];
		console.log("putting " + i + " with value: " + newObj[i]);
	}
	console.log("save Pressed:" + JSON.stringify(this.data));
	if (this.app !== null) {
		this.app.setState({data: this.data});
	}
}

Controller.prototype.deletePressed = function (index, typeOfDelete) {
	console.log("Controller.deletePressed " + typeOfDelete);
	if (typeOfDelete) {
		this.data.contactList.splice(index,1);
		
		//force app to rerender
		if (this.app !== null) {
			this.app.setState({data: this.data});
		}
	} else {
		this.savePressed(index, {});
	}
}

Controller.prototype.setApp = function (app) {
	this.app = app;
	console.log("APP SET")
}