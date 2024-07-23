// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  return (a + b).toString(2);
}

// other solutions
function addBinary2(a, b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = (c % 2) + res; // can store it opposite way
    c = Math.floor(c / 2); // removes decimal
  }
  return res;
}
