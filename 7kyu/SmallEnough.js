// You will be given an array and a limit value. You must check
// that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

// my soluton
function smallEnough(a, limit) {
  let res = true;
  a.map(function (el) {
    if (el > limit) res = false;
  });

  return res;
}

// best practice
function smallEnough2(a, limit) {
  return Math.max(...a) <= limit;
}

// others
function smallEnough3(a, limit) {
  return a.every((el) => el <= limit);
}
