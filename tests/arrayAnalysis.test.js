import analyze from '../modules/arrayAnalysis';

test('array analysis test 1', () => {
  expect(analyze([1])).toEqual({ avr: 1, min: 1, max: 1, len: 1 });
});

test('array analysis test 2', () => {
  expect(analyze([3.7, 4, -5])).toEqual({ avr: 0.9, min: -5, max: 4, len: 3 });
});

test('array analysis test 3', () => {
  expect(analyze([6, 7, 8, 9, 10])).toEqual({
    avr: 8,
    min: 6,
    max: 10,
    len: 5,
  });
});
