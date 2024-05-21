// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// my solution
function spinWords(str) {
  return str
    .split(' ')
    .map(function (el) {
      if (el.length >= 5) {
        return el.split('').reverse().join('');
      } else {
        return el;
      }
    })
    .join(' ');
}

// other solution
function spinWords2(string) {
  return string.replace(/\w{5,}/g, function (el) {
    return e.split().reverse().join('');
  });
}
