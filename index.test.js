import {capitalize, reverseString} from './index.js'

describe('Capitalization', () => {
  test("dog becomes Dog",() => {
      expect(capitalize("dog")).toBe("Dog")
  })

  test("a becomes A", () => {
    expect(capitalize('a')).toBe('A');
  }) 
});

describe('Reverse string', () => {
  test('james becomes semaj', () => {
    expect(reverseString('james')).toBe('semaj');
  });

  test('a becomes a', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('PeAnuT ButTeR becomes ReTtuB TunAeP', () => {
    expect(reverseString("PeAnuT ButTeR")).toBe("ReTtuB TunAeP");
  });
});