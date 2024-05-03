// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//my solution
function getCount(str) {
  let count = 0;
  let strArr = str.split('');

  strArr.filter((el) =>
    el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u'
      ? count++
      : count
  );

  return count;
}

//other solution
function getCount2(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// g => check all the pattern globally
// i => not case sensitive
