// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// my solution
function getMiddle(s) {
  let middleIndex = s.length / 2;
  if (s.length % 2 == 0) {
    // even
    return s.slice(middleIndex - 1, middleIndex + 1);
  } else {
    // odd
    return s.charAt(middleIndex);
  }
}

// best practice
function getMiddle2(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
