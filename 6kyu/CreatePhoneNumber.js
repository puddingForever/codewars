// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// my solution
function createPhoneNumber(numbers) {
  let ret = "(";

  for (let i = 0; i < numbers.length; i++) {
    if (i === 2) {
      ret += numbers[i] + ") ";
    } else if (i === 5) {
      ret += numbers[i] + "-";
    } else {
      ret += numbers[i];
    }
  }

  return ret;
}

// other solution
function createPhoneNumber2(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
