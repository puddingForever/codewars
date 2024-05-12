// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
  let array = str
    .split("")
    .filter((el) => el.toLowerCase() === "x" || el.toLowerCase() === "o");

  if (array.length === 0) return true;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "x" || array[i] == "X") {
      count1++;
    } else {
      count2++;
    }
  }
  return count1 == count2;
}

// other solutions
function XO2(str) {
  let x = str.match(/x/gi); // ['x','x']
  let o = str.match(/o/gi); // ['o','o']
  return (x && x.length) === (o && o.length); // if x is not null or undefined, checks length
}
