// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// my solution
function solution(str) {
  let newArray = [];
  for (let i = 0; i < str.split('').length; i += 2) {
    newArray.push(str.slice(i, i + 2));
  }
  return newArray.map((el) => (el.length === 1 ? el + '_' : el));
}

// other solution
// it inserts _ at the end of the string
// when theres only even number of characters, _ becomes only one letter => 'ab' 'cd' '_'
function solution2(s) {
  return (s + '_').match(/.{2}/g) || [];
}
