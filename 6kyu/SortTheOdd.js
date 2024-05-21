// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// my solution
function sortArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] % 2 != 0 && array[j] % 2 != 0) {
        // if both are odd num
        if (array[j] < array[i]) {
          let temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
  }

  return array;
}

// other solution
// filter(x => x % 2) returns odd number because there is always remainder when the number is odd number. which means there is a value hence returns true.
function sortArray2(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
