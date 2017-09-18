//****************************************
// Definig the board object constructor
//****************************************

function CoolBloqs (/*width, length*/) {
   // Board layout (1st iteration is 14x14 tiles, may need a constuctor to let users choose board size)

   var width = 4; // remove when w and l are not fixed anymore
   var length = 4;
  this.boardsize= {
    width: width,
    length: length
  };

  this.tiles = ["red", "green", "blue", "purple"]; // Possible tiles colors (1st iteration has 4 fixed colors)

  //****************************************
  // Generating a board filled with random tiles
  //****************************************
    this.board = new Array(this.boardsize.length).fill(null).map(function () {
    return new Array(this.boardsize.width).fill(null).map(function() {
      return this.randomTileColor();
    });
  });
  }
  /* For reference, board looks like this:
  boardRepresentation = [
    [{ownership, color}, idem, idem, idem],
    [idem,               idem, idem, idem],
    [idem,               idem, idem, idem],
    [idem,               idem, idem, idem]
    ]
  */


  //****************************************
  // Stuff to deal with later
  //****************************************
/*
  this.ended = false; // Checking if game is over
  this.playerTurn = 0; // Turn based 1v1 game. Starts with Player 1 turn, changes from 0 to 1 for Player 2 and back to 0
  this.ownTiles = []; // Set of tiles owned by the player


//****************************************
// Game Logic and Funtions go here
//****************************************



// 1. Picking a random tile color

CoolBloqs.prototype.randomTileColor = function() {
  var index = Math.floor(Math.random() * 4);
  var tileColor = this.tiles[index];
  console.log(tileColor);
};

// ****** ACTIVATE TO TEST FUNCTION
// flood.randomTileColor();
// ****** END ACTIVATE TO TEST FUNCTION



/*

CoolBloqs.prototype.fillBoard = function() {
  for (var i = 0; i < this.board[0].length; i++)
    if (this.board[0][i] === null) {
      var randTile = randomTileColor();
      this.board[0].push(randTile);
    }
};
*/

// 3. Handling each player's owned tiles (?)
flood = new CoolBloqs();
