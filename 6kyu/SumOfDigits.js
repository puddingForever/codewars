// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// my solution
function digitalRoot(n) {
  // divide  each digits
  const arr = n.toString().split('');
  let sum = 0;
  // get sum
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10);
  }
  // if sum has two digits, split again and add again ...
  let len = sum.toString().length;
  if (len > 1) {
    return digitalRoot(sum.toString());
  }
  // else , just return as it is
  return sum;
}

// other solution
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}
