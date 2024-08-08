// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// my solution
function hoopCount(n) {
  return n >= 10
    ? 'Great, now move on to tricks'
    : 'Keep at it until you get it';
}

// others
const COUNT_ATM = 10;
const HOOP_MESSAGES = {
  UNDER_ATM: 'Keep at it until you get it',
  MET_ATM: 'Great, now move on to tricks',
};
const hoopCount2 = (count) => (count) =>
  COUNT_ATM ? HOOP_MESSAGES.MET_ATM : HOOP_MESSAGES.UNDER_ATM;
