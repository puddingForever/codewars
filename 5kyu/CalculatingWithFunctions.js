// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function zero(cal) {
  return cal ? cal(0) : 0;
}
function one(cal) {
  return cal ? cal(1) : 1;
}
function two(cal) {
  return cal ? cal(2) : 2;
}
function three(cal) {
  return cal ? cal(3) : 3;
}
function four(cal) {
  return cal ? cal(4) : 4;
}
function five(cal) {
  return cal ? cal(5) : 5;
}
function six(cal) {
  return cal ? cal(6) : 6;
}
function seven(cal) {
  return cal ? cal(7) : 7;
}
function eight(cal) {
  return cal ? cal(8) : 8;
}
function nine(cal) {
  //9

  return cal ? cal(9) : 9;
}

function plus(b) {
  //9
  return function (a) {
    //4
    return a + b; //49
  };
}
function minus(b) {
  return function (a) {
    return a - b;
  };
}
function times(b) {
  return function (a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function (a) {
    return parseInt(a / b);
  };
}
