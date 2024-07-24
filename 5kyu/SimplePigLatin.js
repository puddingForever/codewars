// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// my solution
function pigIt(str) {
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (/^[a-zA-Z]+$/.test(arr[i])) {
      arr[i] = arr[i].substring(1) + arr[i][0] + 'ay';
    }
  }

  return arr.join(' ');
}

// best practice ( it's abit hard to read code i dont think its best practice... )
function pigIt2(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

// best practice2
function pigIt3(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
