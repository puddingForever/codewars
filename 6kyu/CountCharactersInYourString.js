// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// my solution
function countCharactersInYourString(str) {
  let result = {};
  str.split('').map((el) => (result[el] = result[el] + 1 || 1));
  return result;
}

// other
function count(str) {
  var count = {};
  str.split('').forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
