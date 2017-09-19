//****************************************
// Definig the board object constructor
//****************************************

function CoolBloqs (/*width, length*/) {
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


  this.currentPlayer = [0, 1]; // Turn based 1v1 game. Starts with Player 1 turn, changes from 0 to 1 for Player 2 and back to 0

// Auto-contaminate player's starting zones (useful if starting zone is > 1 tile)

  this.contaminate(this.board[0][0]); // no need to specify ownership because tile already has the info
  this.contaminate(this.board[that.boardsize.length - 1][that.boardsize.width - 1]);


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
  if ( (!this.board[i]) || (!this.board[i][j]) ) {
    return undefined;
  }
  return this.board[i][j];
};

// 3. Getting neighboors

CoolBloqs.prototype.getNeighboors = function(cell) {
  var neighboors = [];
  var upNeighboor = this.get(cell.row-1, cell.col);
  var rightNeighboor = this.get(cell.row, cell.col+1);
  var downNeighboor = this.get(cell.row+1, cell.col);
  var leftNeighboor = this.get(cell.row, cell.col-1);
  neighboors.push(upNeighboor, rightNeighboor, downNeighboor, leftNeighboor);
  return neighboors.filter(function(neighboor) {
    return neighboor !== undefined;
  });
};

//****************************************
// Contaminate function
//****************************************

CoolBloqs.prototype.contaminate = function(cell) {
  var that = this;
  var neighboors = this.getNeighboors(cell);
  var processingNeighboors = neighboors.filter(function (neighboor) {
    return  neighboor.ownership !== cell.ownership &&
            neighboor.color === cell.color; });
  processingNeighboors.forEach(function(neighboor) {
    neighboor.ownership = cell.ownership; }
  );
  processingNeighboors.forEach(function(neighboor) {
    that.contaminate(neighboor); }
  );
};

//****************************************
// Play function
//****************************************

CoolBloqs.prototype.play = function(color) {
  if (this.currentColor[this.currentPlayer] === color) {
    return;
  } else {
    this.currentColor[this.currentPlayer] = color;
    
  }
};

// CoolBloqs.prototype.play = function(color) {
// this.currentColor[this.currentPlayer] = color
// TO DO :
// 1. CONVERTIR CELLS DU JOUEUR EN COLOR
// 2. Recupérer les voisins de couleur color qui ne m'appartient pas
// -> EXAMPLE: ARR [(2,0), (0,2), (0,2)]
// 3. Switch ownership -- DONE
// }
