export function encrypt(message, offset) {
  let output = '';

  for (let i = 0; i <= message.length; i++) {
    let code = message.charCodeAt(i);

    if (code >= 97 && code <= 122) { //lowercase letters
      let shiftedCode = ((code - 97 + offset) % 26) + 97
      output += String.fromCharCode(shiftedCode);
      continue
    }

    if (code >= 65 && code <= 90) { //uppercase letters
      let shiftedCode = ((code - 65 + offset) % 26) + 65
      output += String.fromCharCode(shiftedCode);
      continue
    }

    output += message[i]; // don't encrypt non-letter characters
    
    
  }

  return output;
}

encrypt('SpOnGeBoB', 15);