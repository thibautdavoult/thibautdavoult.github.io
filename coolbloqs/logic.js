//****************************************
// Definig the board object constructor
//****************************************

function CoolBloqs (/*width, length*/) {
   // Board layout (1st iteration is 14x14 tiles, may need a constuctor to let users choose board size)
  this.pickedColor = "red";
  var that = this;

  var width = 4; // remove when w and l are not fixed anymore
  var length = 4;
  this.boardsize = {
    width: width,
    length: length
  };
  this.availableColors = ["red", "green", "blue", "purple"]; // Possible tiles colors (1st iteration has 4 fixed colors)
//****************************************
// Generating a board filled with random tiles
//****************************************

  this.board = new Array(that.boardsize.length).fill(null).map(function (_, i) { // _ is for element that is not specified (here null)
    return new Array(that.boardsize.width).fill(null).map(function (_, j) {
      var tile = {
        ownership: null,
        color: that.randomTileColor(),
        row: i,
        col: j
      };
      return tile;
    });
  });
    console.log(this.board);

//****************************************
// Setting Players' starting tiles
//****************************************

  this.board[0][0].ownership = 0;
  this.board[that.boardsize.length - 1][that.boardsize.width - 1].ownership = 1;

  //****************************************
  // Player's color function and starting zones
  //****************************************

  this.currentColor = [this.board[0][0].color, this.board[that.boardsize.length - 1][that.boardsize.width - 1].color];


  this.playerTurn = [0, 1]; // Turn based 1v1 game. Starts with Player 1 turn, changes from 0 to 1 for Player 2 and back to 0

  this.player1Zone = this.checkNeighboors(0,
                                    0,
                                    this.currentColor[0],
                                    0);

  this.player2Zone = this.checkNeighboors(that.boardsize.length - 1,
                                    that.boardsize.width - 1,
                                    this.currentColor[1],
                                    1);


  //****************************************
  // Stuff to deal with later
  //****************************************
/*
  this.ended = false; // Checking if game is over

  this.ownTiles = []; // Set of tiles owned by the player
*/

} // end of object creator


//****************************************
// Game Logic and Funtions go here
//****************************************

// 1. Picking a random tile color

CoolBloqs.prototype.randomTileColor = function() {
  var index = Math.floor(Math.random() * this.availableColors.length);
  var tileColor = this.availableColors[index];
  return tileColor;
};

// 2. Simplifying method to select a tile

CoolBloqs.prototype.get = function(i,j) {
  if ( (!this.board[i]) || (!this.board[j]) ) {
    return undefined;
  }
  return this.board[i][j];
};

// 3. Defining the picked color

// CoolBloqs.prototype.pickedColor = function() {
//
// };

//****************************************
// Zone's color function
//****************************************

CoolBloqs.prototype.checkNeighboors = function(i,j, pickedColor, playerTurn) {
  switch (this.get(i,j)) {
    case this.get(i+1, j):
      if (this.get(i+1, j).color !== this.pickedColor) {
        return;
      } if (this.get(i+1, j).color === this.pickedColor) {
        this.get(i+1,j).ownership = this.playerTurn;
        return this.checkNeighboors(i+1, j);

      }
    break;
    case this.get(i-1, j):
      if (this.get(i-1, j).color !== this.pickedColor) {
        return;
      } if (this.get(i-1, j).color === this.pickedColor) {
        this.get(i+1,j).ownership = this.playerTurn;
        return this.checkNeighboors(i-1, j);
      }
    break;
    case this.get(i, j+1):
      if (this.get(i, j+1).color !== this.pickedColor) {
        return;
      } if (this.get(i, j+1).color === this.pickedColor) {
        this.get(i+1,j).ownership = this.playerTurn;
        return this.checkNeighboors(i, j+1);
      }
    break;
    case this.get(i, j-1):
    if (this.get(i, j-1).color !== this.pickedColor) {
      return;
    } if (this.get(i, j-1).color === this.pickedColor) {
      this.get(i+1,j).ownership = this.playerTurn;
      return this.checkNeighboors(i, j-1);
    }
    break;
  }
};



// 3. Handling each player's owned tiles (?)
