const support = require('./support');

test('fullName()', () => {
  const contact = {
    firstName: 'Maurizio',
    lastName: 'Pucci'
  };

  expect(support.fullName(contact))
    .toBe('Pucci, Maurizio');
});

test('fullName(): Edge case: Nil firstName or lastName', () => {
  expect(support.fullName({ firstName: 'Maurizio' }))
    .toBe(', Maurizio');
  expect(support.fullName({ lastName: 'Pucci' }))
    .toBe('Pucci, ');
});

test('fullName(): Edge case: Empty and nil contact', () => {
  expect(support.fullName({})).toBe('');
  expect(support.fullName(undefined)).toBe('');
  expect(support.fullName(null)).toBe('');
});

test('upperCaseFullName()', () => {
  const contact = {
    firstName: 'Pippina',
    lastName: 'Pucci'
  };

  expect(support.upperCaseFullName(contact))
    .toBe('PUCCI, PIPPINA');
});

test('upperCaseFullName(): Edge case: Empty and nil contact', () => {
  expect(support.upperCaseFullName({})).toBe('');
  expect(support.upperCaseFullName(undefined)).toBe('');
  expect(support.upperCaseFullName(null)).toBe('');
});

test('buildAlphabetIndex()', () => {
  const contacts = [
    { lastName: 'Aaa' },
    { lastName: 'Bbb' },
    { lastName: 'Bbb' },
    { lastName: undefined },
    { lastName: 'Ccc' },
    { lastName: 'Ddd' }
  ];

  const alphabetIndex = support.buildAlphabetIndex(contacts)

  expect(alphabetIndex).toEqual('ABCD');
});

test('buildAlphabetIndex(): Edge case: Empty and nil contacts array', () => {
  expect(support.buildAlphabetIndex([])).toEqual('');
  expect(support.buildAlphabetIndex(undefined)).toEqual('');
  expect(support.buildAlphabetIndex(null)).toEqual('');
});
