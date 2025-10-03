import {capitalize} from './index.js'

describe('Capitalization', () => {
  test("dog becomes Dog",() => {
      expect(capitalize("dog")).toBe("Dog")
  })

  test("a becomes A", () => {
    expect(capitalize('a')).toBe('A');
  }) 
});
