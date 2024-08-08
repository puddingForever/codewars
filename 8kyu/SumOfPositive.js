// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// my solution
function positiveSum(arr) {
  let sum = 0;

  arr.map(function (el) {
    if (el > 0) sum += el;
  });

  return sum;
}

// others using reduce()
function positiveSum2(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// others using forEach
function positiveSum3(arr) {
  var sum = 0;
  arr.forEach(function (el) {
    if (el > 0) sum += el;
  });

  return sum;
}
