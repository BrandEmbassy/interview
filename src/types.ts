interface Action<Payload> {
    type: string;
    payload?: Payload;
    error?: boolean;
    meta?: any;
}

interface Contact {
    id: string;
    fullName: string;
    bio: string;
    phone: string;
    mail: string;
}

declare namespace state {
    interface Root {
        contacts: Contact[];
    }
}
