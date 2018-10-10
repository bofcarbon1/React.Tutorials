This Tic Tac Toe game app comes from a facebook tutorial
 
Initially it consists of a 'Board' component and a 'Game' component which was
renamed to App for continuity with other tutorial apps in this React tutorial repository.
Another component named 'Square' was converted to a function.
 
The Board contains 9 Squares in which an X or and O can be placed by clicking on the square.
Each square is a button that contains an onClick function that renders the X or O then saves
the new Board to state. 
 
 The App contains a status the displays which player's turn is next X or O and when a game is
 won displays a winner of X or O. In addition a list of Board moves is added to after each move
 is completed. Clicking on the the button of each move will bring you back to a point in history
 of the game using state's history of Board moves. 

 Extra features added along with comments 

 1. When a move history button is selected the text will turn to blue
 
 2. A sort button was added which will toggle the order of the move history sorted by description. The feature has a flaw. The moves will not be sorted and rerendered. If any button is pressed afterward the rerender will happen in the correst sorted order. This is an issue with communicating between components which has less options in pure native mode. This will be readdressed with a more advanced option such as Mobx at a later date.

 3. The original hard coded move history list was converted to a for loop approach which built the elements dynamically.

 4. When a player wins the 3 sqaures that were used to get the win should have a gold background. This feature was  completed by changing the className to the attribute with the gold background. There was an issue however. Pressing the history buttons and going back to a previous game state does not reset the squares back to the proper class. 



