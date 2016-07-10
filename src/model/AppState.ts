import ContactDetail = require('./ContactDetail')

class AppState {
    constructor(contacts: ContactDetail[]) {
        this.contacts = contacts;
    }

    public contacts: ContactDetail[]
}

export = AppState