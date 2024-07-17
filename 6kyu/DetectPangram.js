// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
//

function isPangram(str) {
  let alphabets = [];
  for (let i = 97; i <= 122; i++) {
    alphabets.push(i);
  }

  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (alphabets[j] === lowerStr.charCodeAt(i)) {
        alphabets[i] = 999999;
      }
    }
  }

  for (let i = 0; i < alphabets.length; i++) {
    if (alphabets[i] !== 999999) return false;
  }

  return true;
}
