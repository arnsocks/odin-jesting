export function capitalize(x) {
    const i = x[0].toUpperCase()
    if (x.length === 1) return i
    return i + x.slice(1)
}

export function reverseString(input) {
  let output = '';
  for (let i = input.length-1; i >= 0; i--) {
    output += input[i];
    // console.log(input[i])
  }
  return output;
}

console.log(reverseString('PeAnuTButTeR'));