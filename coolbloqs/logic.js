//****************************************
// Definig the board object constructor
//****************************************

function newBoard () {
  this.board = []; // Board layout (1st iteration is 14x14 tiles, may need a constuctor to let users choose board size)
  this.ended = false; // Checking if game is over
  this.playerTurn = 0; // Turn based 1v1 game. Starts with Player 1 turn, changes from 0 to 1 for Player 2 and back to 0
  this.tiles = ["red", "green", "blue", "purple"]; // Possible tiles colors (1st iteration has 4 fixed colors)
  this.ownTiles = []; // Set of tiles owned by the player
  this._generateBoard(); // Puts tiles randomly across the board on game initiation
}


//****************************************
// Game Logic and Funtions go here
//****************************************

// 1. Random tile creator

// 2. Generating a board filled with random tiles

// 3. Handling each player's owned tiles (?)
