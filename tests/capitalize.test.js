import capitalize from '../modules/capitalize';

test('return capitalized string', () => {
  expect(capitalize('website')).toBe('Website');
});

test('return multiple capitalized string', () => {
  expect(capitalize('my website development')).toBe('My Website Development');
});

test('return properly capitalized string', () => {
  expect(capitalize('pRoPeRlY cApItalIzeD STRing')).toBe(
    'Properly Capitalized String'
  );
});

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('string with whitespace', () => {
  expect(capitalize(' my    website    DeVelOPMent')).toBe(
    'My Website Development'
  );
});
