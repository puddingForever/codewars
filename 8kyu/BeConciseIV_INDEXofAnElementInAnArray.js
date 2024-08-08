// Provided is a function Kata which accepts two parameters in the following order:
// array, element and returns the index of the element if found and "Not found" otherwise.
// Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161)
// You may assume that all array elements are unique.

// should contain no more than 85 characters

/*
  let array = [2,3,5,7,11];
    assert.strictEqual(find(array, 5), 2);
    assert.strictEqual(find(array, 11), 4);
    assert.strictEqual(find(array, 3), 1);
    assert.strictEqual(find(array, 2), 0);
    assert.strictEqual(find(array, 7), 3);
    assert.strictEqual(find(array, 1), "Not found");
    assert.strictEqual(find(array, 8), "Not found");
    array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
    assert.strictEqual(find(array, "Hello World"), 1);
    assert.strictEqual(find(array, "lorem ipsum"), "Not found");
    assert.strictEqual(find(array, "Lorem Ipsum"), 3);
    assert.strictEqual(find(array, false), 2);
    assert.strictEqual(find(array, true), 0);
    assert.strictEqual(find(array, Math.PI), 5);
    assert.strictEqual(find(array, 3.14), "Not found");
    assert.strictEqual(find(array, 6), 4);
*/
// proglem
function problem(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return 'Not found';
}

// my solution (did not meet the result, cuz of the character length )
function find(arr, el) {
  return arr.includes(el)
    ? arr.reduce((a, b, i) => (b === el ? (a = i) : (a = a)), 0)
    : 'Not found';
}

// my solution 2 (passed ! but .. still not perfekt)
function find2(ar, el) {
  const i = ar.indexOf(el);
  return i !== -1 ? i : 'Not found';
}

// best solution
function find3(array, element) {
  return array.includes(element) ? array.indexOf(element) : 'Not found';
}
