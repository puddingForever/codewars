// DESCRIPTION:
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("");
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
/*
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
*/
// my solution
function firstNonRepeatingLetter(s) {
  if (s.length === 1) return s;

  let map = new Map();
  const arr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].toLowerCase();
    let count = map.get(char) || 1;
    map.set(char, count++);
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i].toLowerCase()) === 2) {
      return arr[i];
    }
  }

  return '';
}

// others
function firstNonRepeatingLetter2(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], 'gi')).length === 1) {
      return s[i];
    }
  }
  return '';
}
