// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// my solution
// charAt returns character , charCodeAt returns code unit (number)
function high(x) {
  const words = x.split(' ');
  let max = 0,
    ret = '';
  for (let i = 0; i < words.length; i++) {
    let s = words[i],
      sum = 0;
    for (let j = 0; j < s.length; j++) {
      sum += s.charCodeAt(j) - 96;
    }
    if (sum > max) {
      max = sum;
      ret = s;
    }
  }
  return ret;
}
