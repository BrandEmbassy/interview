export const fullName = (contact) => {
  if (
    !contact ||
    (
      Object.keys(contact).length === 0 &&
      contact.constructor === Object
    )
  ) return '';

  const { firstName = '', lastName = '' } = contact;
  return `${lastName}, ${firstName}`;
};

export const upperCaseFullName = (contact) =>
  fullName(contact).toUpperCase();

export const buildAlphabetIndex = (contacts) =>
  contacts ? contacts.reduce((acc, c) => {
    if (c.lastName) {
      const initial = c.lastName[0];
      if (acc[acc.length - 1] !== initial) {
        acc += c.lastName[0];
      }
    }
    return acc;
  }, '').toUpperCase() : '';
