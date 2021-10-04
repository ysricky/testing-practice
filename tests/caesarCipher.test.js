import caesar from '../modules/caesharCipher';

test('"secret" encrypted with key 3', () => {
  expect(caesar('secret', 3)).toBe('vhfuhw');
});

test('works with non-alphabet', () => {
  expect(caesar('My motto is, fight till the end!', 3)).toBe(
    'Pb prwwr lv, iljkw wloo wkh hqg!'
  );
});

test('works with capital word', () => {
  expect(caesar('The Odin Project', 3)).toBe('Wkh Rglq Surmhfw');
});
