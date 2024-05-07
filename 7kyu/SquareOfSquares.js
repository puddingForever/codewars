// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// my solution
var isSquare = function (n) {
  if (n < 0) return false;
  if (n === 0 || n === 1) return true;

  for (let i = 2; i < n; i++) {
    if (i * i === n) return true;
  }

  return false;
};

// best practice
function isSquare2(n) {
  return Math.sqrt(n) % 1 === 0;
}
