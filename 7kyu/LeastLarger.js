// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

// my solution
function leastLarger(array, i) {
  let smaller = Infinity;
  result = -1;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[i] && array[index] < smaller) {
      smaller = array[index];
      result = index;
    }
  }
  return index;
}

// other solutions
const leastLarger2 = (a, i) =>
  a.indexOf(Math.min(...a.filter((n) => n > a[i])));
