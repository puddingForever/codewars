// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// my solution
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  let p =
    p1 + p2 === "scissorspaper" ||
    p1 + p2 === "rockscissors" ||
    p1 + p2 === "paperrock"
      ? "1"
      : "2";

  return "Player " + p + " won!";
};

// best practice
const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
