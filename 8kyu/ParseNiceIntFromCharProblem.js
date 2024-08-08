// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string.
// For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
/*
    assert.strictEqual(getAge("4 years old"), 4);
    assert.strictEqual(getAge("9 years old"), 9);
    assert.strictEqual(getAge("1 year old"), 1);    
*/
// my solution
function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  return Number(inputString.split(' ')[0]);
}

// others , parseInt() checks only the first character of the string, if the first char is a valid integer, it will return integer
// if i input "i am 5" then it will return NaN since it checks only the first character of the string
function getAge2(inputString) {
  return parseInt(inputString);
}
