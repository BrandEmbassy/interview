var util = {
	isEmail: function (s) {
		var regexp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
		return regexp.test(s);
	},

	isPhone: function (s) {
		var regexp =/^\d{9}$/i;
		return regexp.test(s);
	},

    // TODO: This should be done in a much better way using formating library
    formatPhone: function(phone: number) : string {
		if (!phone) 
			return ""

        var regexp = /^(\d\d\d)(\d\d\d)(\d\d\d)$/
        var phoneStr = phone.toString()
        while (phoneStr.length < 9) {
            phoneStr = '0' + phoneStr
        }
        return phoneStr.replace(regexp, "$1 $2 $3")
    }
	
}

export = util;