// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
/*
    assert.strictEqual(validateUsr('asddsa'), true);
    assert.strictEqual(validateUsr('a'), false);
    assert.strictEqual(validateUsr('Hass'), false);
    assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
    assert.strictEqual(validateUsr(''), false);
    assert.strictEqual(validateUsr('____'), true);
    assert.strictEqual(validateUsr('012'), false);
    assert.strictEqual(validateUsr('0123'), true);
    assert.strictEqual(validateUsr('1234567890abcdefg'), false);
    assert.strictEqual(validateUsr('p1pp1'), true);
    assert.strictEqual(validateUsr('asd43 34'), false);
    assert.strictEqual(validateUsr('asd43_34'), true);
    assert.strictEqual(validateUsr('abcd'), true);
*/

// my solution
function validateUsr(username) {
  const res = /^(\d|_|[a-z]){4,16}$/g.test(username);
  return res;
}

// others
function validateUsr(username) {
  const validator = /^[a-z0-9_]{4,16}$/;
  return validator.test(username);
}
