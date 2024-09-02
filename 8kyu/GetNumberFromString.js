// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// my solution
function getNumberFromString(s) {
  return Number(s.replace(/[^0-9]/g, ''));
}

// others
function getNumberFromString(s) {
  return +s.replace(/\D/g, '');
}

// exclude numbers
// /[^0-9]/g , /[\D]/g , /^[\d]/g
