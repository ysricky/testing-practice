import reverseString from '../modules/reverseString';

test('return reversed string', () => {
  expect(reverseString('odin')).toBe('nido');
});

test('return multiple reversed string', () => {
  expect(reverseString('multiple reversed string')).toBe(
    'gnirts desrever elpitlum'
  );
});

test('return empty string', () => {
  expect(reverseString(' ')).toBe(' ');
});
