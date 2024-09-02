// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
/*
    Test.assertEquals(''.digit(), false);
    Test.assertEquals('7'.digit(), true);
    Test.assertEquals(' '.digit(), false);
    Test.assertEquals('a'.digit(), false);
    Test.assertEquals('a5'.digit(), false);
    Test.assertEquals('14'.digit(), false);
*/

// my solution
String.prototype.digit = function () {
  return /^\d$/g.test(this);
};

// others
String.prototype.digit = function () {
  return /^[0-9]$/g.test(this);
};
