// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// my solution
// I couldnt solve it ..

// other solution
function findUnique(arr) {
  const duplicates = arr.filter((el, index) => arr.indexOf(el) !== index);
  return arr.filter((el) => el !== duplicates[0])[0];
}

// solution2
// arr.pop() returns the last element in an array
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
