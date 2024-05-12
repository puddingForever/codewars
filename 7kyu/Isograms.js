// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// my solution
function isIsogram(str) {
  let myMap = new Map();

  for (let ch of str) {
    let data = ch.toLowerCase();
    if (myMap.get(data)) {
      return false;
    }
    myMap.set(data, true);
  }
  return true;
}

// other solution (because set can only contain unique elements)
function isIsogram2(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
