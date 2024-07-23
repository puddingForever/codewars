// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// my solution
// expected 'undefineddlrow' to equal 'dlrow'

// my solution
function solution(str) {
  let result = '';
  const arr = Array.from(str);
  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

// most voted1
function solution2(str) {
  return str.split('').reverse().join('');
}

// most voted2
const solution3 = (s) => [...s].reverse().join('');
