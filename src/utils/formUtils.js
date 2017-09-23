
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
  console.log('validate Input');
  const valid = validationFunc(value);
  console.log('validate Input', valid);
  let newErrors = errors;
  console.log('validate Input, errors', errors);
  if (!valid) {
    newErrors = newErrors || {};
    newErrors[name] = true;
  } else if (valid && newErrors) {
    newErrors[name] = null;
    delete newErrors[name];
  }
  console.log('validate Input, newErrors', newErrors);
  return newErrors;
}
