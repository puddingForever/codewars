// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//
// my solution -> didnt work (still figuring it out why :((
function solution(str, ending) {
  // 'abcde', 'cde'
  const firstArr = str.split();
  const secondArr = ending.split();

  let lastSentence = '';

  for (let i = firstArr.length - 1; i >= 0; i--) {
    for (let j = secondArr.length - 1; j >= 0; j--) {
      if (firstArr[i] !== secondArr[j]) {
        break;
      } else if (firstArr[i] === secondArr[j]) {
        lastSentence += firstArr[i];
      }
    }
  }

  const lastArr = lastSentence.split('');

  for (let i = firstArr.length - 1; i >= 0; i--) {
    for (let j = lastArr.length - 1; j >= 0; j--) {
      if (firstArr[i] !== lastArr[j]) {
        return false;
      }
    }
  }

  return true;
}

// other solution
function solution2(str, ending) {
  return str.slice(-ending.length) == ending ? true : false;
}

// best solution (apparently ,,, there's javascript method called endsWith() !! )
function solution3(str, ending) {
  return str.endsWith(ending);
}
