// Ahoy Matey!
// Welcome to the seven seas.
// You are the captain of a pirate ship.
// You are in battle against the royal navy.
// You have cannons at the ready.... or are they?
// Your task is to check if the gunners are loaded and ready, if they are: Fire!
// If they aren't ready: Shiver me timbers!
// Your gunners for each test case are 2, 3 or 4.
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
/*
let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};
describe("Tests", function(){
  it("should Fire on aye", function(){
    assert.strictEqual(cannonsReady(a), 'Fire!');
  });
  it("should Shiver me timbers on nay", function(){
    assert.strictEqual(cannonsReady(b), 'Shiver me timbers!');
  });
});
*/
// my solution
const cannonsReady = (gunners) => {
  //your solution here
  let res = 'Fire!';
  Object.values(gunners).map(function (el) {
    if (el === 'nay') res = 'Shiver me timbers!';
  });

  return res;
};

// best solution ( some function stops the loop if true value is found )
const cannonsReady2 = (gunners) => {
  return Object.values(gunners).some((m) => m === 'nay')
    ? 'Shiver me timbers!'
    : 'Fire!';
};
