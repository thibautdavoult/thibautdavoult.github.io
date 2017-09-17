//****************************************
// Definig the board object constructor
//****************************************

function newBoard () {
  this.board = []; // Board layout (1st iteration is 14x14 tiles)
  this.ended = false; // Checking if game is over
  this.playerTurn = 0; // Turn based 1v1 game. Starts with Player 1 turn, changes from 0 to 1 for Player 2 and back to 0
  this.tiles = ["red", "green", "blue", "purple"]; // Possible tiles colors (1st iteration has 4 fixed colors)
  this._generateBoard(); // Puts tiles randomly across the board on game initiation
}


//****************************************
// Game Logic and Funtions go here
//****************************************
