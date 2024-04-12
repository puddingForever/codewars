// Very simple, given a number (integer / decimal / both depending on the language),
//find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

//my solution
function opposite(number) {
  return number < 0 ? Math.abs(number) : -number;
}

//best practice
function opposite(number) {
  return -number;
}
