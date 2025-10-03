import {analyzeArray} from './analyzeArray.js'

describe('Array analyzer', () => {
  let obj = analyzeArray([1,8,3,4,2,6]);
  test('provide an average', () => {
    expect(obj.average).toBe(4);
  });
  test('provide a min', () => {
    expect(obj.min).toBe(1);
  });
  test('provide a max', () => {
    expect(obj.max).toBe(8);
  });
  test('provide a length', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
  });

  test('Full object match', () => {
    expect(analyzeArray([100,-78,4306,8,2,50,69])).toEqual(
      {
        average: 636.7142857142857,
        min: -78,
        max: 4306,
        length: 7
      }
    )
  })
})