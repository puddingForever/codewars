// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// my solution
function FindOddInt(array) {
  let ret = 0;

  for (let i = 0; i < array.length; i++) {
    let count = array.filter((value) => value === array[i]).length;
    if (count % 2 === 1) ret = array[i];
  }

  return ret;
}

// other solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
/*
    if element appears twice , it becomes 0 
    in XOR calculation a ^ a = 0 
    therefore , if the element appeared odd number of times we can see the odd number in the end!!
*/
