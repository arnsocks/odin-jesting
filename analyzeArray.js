export function analyzeArray(array) {
  let output = {};

 

  output.average = array.reduce((acc, cur) => acc + cur) / array.length;

  output.min = Math.min(...array);

  output.max = Math.max(...array);
  output.length = array.length;

  return output;
}