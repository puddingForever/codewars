// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my solution
function reverseWords(str) {
  const arr = str.split(' ');
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      res += arr[i].charAt(j) + '';
    }
    arr[i] = res;
    res = '';
  }
  return arr.join(' ');
}

// other solution (apparently there's reverse() function in javascript !! )
function reverseWords2(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
