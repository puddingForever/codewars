// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// my solution using insertion sort
function highAndLow(numbers) {
  const arr = numbers.split(' ').map((num) => parseInt(num));

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let str = arr[arr.length - 1] + ' ' + arr[0];
  return str;
}

// best practice
function highAndRowSolution(numbers) {
  numbers = numbers.split(' ');
  return '${Math.max(...numbers)} ${Math.min(...numbers)}';
}
