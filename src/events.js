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
	for (let i in newObj) {
		this.data.contactList[index][i] = newObj[i];
	}
	if (app !== null) {
		app.render();
	}
}

Controller.prototype.setApp = function (app) {
	this.app = app;
}