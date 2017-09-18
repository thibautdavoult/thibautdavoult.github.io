//****************************************
// Definig the board object constructor
//****************************************

function FloodIt () {
   // Board layout (1st iteration is 14x14 tiles, may need a constuctor to let users choose board size)
  this.board = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
  ];
  this.tiles = ["red", "green", "blue", "purple"]; // Possible tiles colors (1st iteration has 4 fixed colors)
  // this._generateBoard(); // Puts tiles randomly across the board on game initiation
/* Later stuff

  this.ended = false; // Checking if game is over
  this.playerTurn = 0; // Turn based 1v1 game. Starts with Player 1 turn, changes from 0 to 1 for Player 2 and back to 0
  this.ownTiles = []; // Set of tiles owned by the player

*/

}


//****************************************
// Game Logic and Funtions go here
//****************************************

flood = new FloodIt();

// 1. Picking a random tile color

FloodIt.prototype.randomTileColor = function() {
  var index = Math.floor(Math.random() * 4);
  var tileColor = this.tiles[index];
  console.log(tileColor);
};

// ****** ACTIVATE TO TEST FUNCTION
// flood.randomTileColor();
// ****** END ACTIVATE TO TEST FUNCTION

// 2. Generating a board filled with random tiles





// 3. Handling each player's owned tiles (?)
