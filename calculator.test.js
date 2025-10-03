import * as calc from './calculator.js'

describe('calculator', () => {
  // ADDITION
  test('1 add 1 = 2', () => {
    expect(calc.add(1,1)).toBe(2);
  })

  test(' 10000 + -5 = 9995', () => {
    expect(calc.add(10000, -5)).toBe(9995);
  })

  // SUBTRACTION
  test('substract + & +', () => {
    expect(calc.sub(100,50)).toBe(50)
  });

  test('substract + & -', () => {
    expect(calc.sub(75, -50)).toBe(125)
  });

  test('subtract - & -', () => {
    expect(calc.sub(-300, -25)).toBe(-275)
  });

  // MULTIPLICATION
  test('multiply + and +', () => {
    expect(calc.mult(5,5)).toBe(25);
  });
  test('multiply + and -', () => {
    expect(calc.mult(5,-5)).toBe(-25);
  });
  test('multiply - and -', () => {
    expect(calc.mult(-5,-5)).toBe(25);
  });

  // DIVISION
  test('divide > 1', () => {
    expect(calc.div(5,4)).toBe(1.25);
  });

  test('divide < 1', () => {
    expect(calc.div(3,4)).toBe(0.75);
  });
  test('divide by 0', () => {
    expect(calc.div(50,0)).toBe(Infinity);
  });
})