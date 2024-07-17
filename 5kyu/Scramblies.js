// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2,
// otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// my solution
function scramble(str1, str2) {
  var myMap = new Map();

  str2.split('').map(function (el) {
    var cnt = myMap.get(el) || 0;
    myMap.set(el, ++cnt);
  });

  str1.split('').map(function (el) {
    if (myMap.has(el)) {
      var cnt = myMap.get(el);
      myMap.set(el, --cnt);
    }
  });

  for (var [key, val] of myMap) {
    if (val > 0) {
      return false;
    }
  }

  return true;
}

// others
function scramble2(str1, str2) {
  let occurences = str1.split('').reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split('').every((character) => --occurences[character] >= 0);
}
