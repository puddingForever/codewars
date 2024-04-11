// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

/* my solution 
public class Kata {
  public static String rps(String p1, String p2) {
        if(p1.equals(p2)) return "Draw!";

        String result = "";

        // p1 => scissors, paper, rock 
        if(p1.equals("scissors")){
          result =  p2.equals("paper") ? "Player 1 won!" : "Player 2 won!";
        }else if(p1.equals("paper")){
          result =  p2.equals("rock")? "Player 1 won!" : "Player 2 won!";
        }else{ // rock
         result =  p2.equals("scissors")? "Player 1 won!" : "Player 2 won!";
        }
         return result;
  }
}
*/

// best practices 
// when p1 wins it is 1 
// when p2 wins  it is 2 
public class Kata{
    public static String rps(String p1, String p2){
      if(p1 == p2) return "Draw!";

      int p = (p1+p2).equals("scissorspaper") || (p1+p2).equals("rockscissor") || (p1+p2).equals("paperrock") ? 1:2;

      return "Player " + p + "won!";
    }
}