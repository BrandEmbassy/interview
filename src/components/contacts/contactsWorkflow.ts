export const ADD_CONTACT = 'contacts/ADD';
export const REMOVE_CONTACT = 'contacts/REMOVE';
export const UPDATE_CONTACT = 'contacts/UPDATE';

export function addContact(id: string, fullName: string, bio: string, phone: string, mail: string): Action<Contact> {
	return {
		type: ADD_CONTACT,
		payload: {
			id,
			fullName,
			bio,
			phone,
			mail
		}
	};
}

export function updateContact(id: string, fullName: string, bio: string, phone: string, mail: string): Action<Contact> {
	return {
		type: UPDATE_CONTACT,
		payload: {
			id,
			fullName,
			bio,
			phone,
			mail
		}
	};
}

export function removeContact(id: string): Action<any> {
	return {
		type: REMOVE_CONTACT,
		payload: {
			id
		}
	};
}

// REDUCERS

const initState: Contact[] = [
	{
		id: '1',
		fullName: 'Frantisek Vopicka',
		bio: 'Super chlap',
		phone: '123 456 789',
		mail: 'vopicka@gmail.com'
	},
	{
		id: '2',
		fullName: 'Alena Vopickova',
		bio: 'Super zenska',
		phone: '123 456 111',
		mail: 'vopickova@gmail.com'
	},
	{
		id: '3',
		fullName: 'Alan Papousek',
		bio: 'Super zenska',
		phone: '123 456 111',
		mail: 'vopickova@gmail.com'
	}
];

export default function reduceApp(state = initState, action: Action<any>): Contact[] {
	if (action.error) return state;
	let newState;

	const data = action.payload;

	switch (action.type) {
		case ADD_CONTACT:
			return [
				...state,
				{
					...data
				}
			];
		case REMOVE_CONTACT:
			return state.filter(
				contact => contact.id !== data.id
			);
		case UPDATE_CONTACT:
			const newState = [...state];
			return newState.map(
				contact => {
					if (contact.id === data.id) {
						return {
							...data
						}
					}

					return contact;
				}
			);
	}
	return state;
}
