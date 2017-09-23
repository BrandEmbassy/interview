
export const labels = {
  bio: 'Bio',
  email: 'E-mail',
  phone: 'Phone',

};

export const placeHolders = {
  fullName: 'Full name',
  description: 'Description',
  phone: '+XXX XXX XXX XXX',
  email: 'E-mail',
};

export function validateInput(name, value, validationFunc, errors) {
  const valid = validationFunc(value);
  let newErrors = errors;
  if (!valid) {
    newErrors = newErrors || {};
    newErrors[name] = true;
  } else if (valid && newErrors) {
    newErrors[name] = null;
    delete newErrors[name];
  }
  return newErrors;
}
