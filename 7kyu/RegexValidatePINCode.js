// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// my solution
function validatePIN(pin) {
  var regex = /^\d{4}$/;
  var regex2 = /^\d{6}$/;

  return regex.test(pin) || regex2.test(pin) ? true : false;
}

// others (i didnt know i can use or(|) sign in regex)
function validatePIN2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// others 2
function validatePIN3(pin) {
  var pinlen = pin.length;
  var isCorrectLength = pinLen == 4 || pinlen == 6;
  var hasOnlyNumbers = pin.math(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }
  return false;
}
