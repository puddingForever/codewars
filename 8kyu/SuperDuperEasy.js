// Make a function that returns the value multiplied by 50
// and increased by 6. If the value entered is a string it should return "Error".
/*
  assert.strictEqual(problem("hello"), "Error");
    assert.strictEqual(problem(1), 56);
    assert.strictEqual(problem(5), 256);
    assert.strictEqual(problem(0), 6);
    assert.strictEqual(problem(1.2), 66);
    assert.strictEqual(problem(3), 156);
    assert.strictEqual(problem("RyanIsCool"), "Error");
    assert.strictEqual(problem(-3), -144);
    assert.strictEqual(problem(""), "Error");
    assert.strictEqual(problem(0.03), 7.5);
*/

// my solution
function problem(x) {
  //your code here
  if (typeof x === 'string') return 'Error';

  let ans = x * 50 + 6;
  return ans;
}

// others
const problem2 = (x) => (typeof x === 'string' ? 'Error' : x * 50 + 6);

// others 2 (isFinite function checks if the argument is a valid number)
const problem3 = (x) => (Number.isFinite(x) ? x * 50 + 6 : 'Error');
