import calculator from '../modules/calculator';

test('add numbers', () => {
  expect(calculator.add(200, 300)).toBe(500);
});

test('subtract numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divide numbers', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test('mutiply numbers', () => {
  expect(calculator.multiply(200, 300)).toBe(60000);
});
