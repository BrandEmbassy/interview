import Contact = require('./Contact')

interface AppState {
    contacts: Contact[]
}

// class AppState {
//     constructor(contacts: ContactDetail[]) {
//         this.contacts = contacts;
//     }

//     public contacts: ContactDetail[]
// }

export = AppState