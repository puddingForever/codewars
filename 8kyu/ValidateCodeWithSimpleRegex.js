// Basic regex tasks.
// Write a function that takes in a numeric code of any length.
// The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
// You can assume the input will always be a number.
/*
    assert.strictEqual(validateCode(123), true);
    assert.strictEqual(validateCode(248), true);
    assert.strictEqual(validateCode(8), false);
    assert.strictEqual(validateCode(321), true);
    assert.strictEqual(validateCode(9453), false);  })
*/

// my solution (it was a best solution )
function validateCode(code) {
  //your code here
  return /^[123]/.test(code);
}
