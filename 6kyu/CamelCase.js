// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// my solution
function camelCase(str) {
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] > 'A' && strArr[i] < 'Z') {
      strArr[i] = ' ' + strArr[i];
    }
  }

  return strArr.join('');
}

// other solution
function camelCase(str) {
  let strArr = str.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      return ' ' + el;
    }

    return el;
  });

  return strArr.join('');
}
