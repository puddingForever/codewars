// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// my solution
function duplicateEncode(word) {
  const arr = word.split('');
  let myMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i].toUpperCase())) {
      // if value is true , then its duplicate
      myMap.set(arr[i].toUpperCase(), true);
    } else {
      myMap.set(arr[i].toUpperCase(), false);
    }
  }

  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (myMap.get(arr[i].toUpperCase()) === true) {
      str += ')';
    } else {
      str += '(';
    }
  }

  return str;
}

// other solution
function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
