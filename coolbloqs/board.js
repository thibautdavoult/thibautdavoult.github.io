//****************************************
// Game UI and Behavior on Screen goes here
//****************************************

//

  // jquery stuff goes here
$(document).ready(function () {

  game = new CoolBloqs();

// function to display board in console

display = function() {
  var board = game.board.map(function(row) {
    return row.map(function(cell) {
      return "ownership: " + cell.ownership + "; color: " + cell.color;
    });
  });
  console.table(board);
};


  // display on actual page

  var that = this;
  var visualBoard = $(".board");

  for (row = 0; row < game.boardsize.length; row++) {
    for (col = 0; col < game.boardsize.width; col++) {
      var cellSize = 100;
      var rowCell = row * cellSize;
      var colCell = col * cellSize;
      visualBoard.append("<div class='tile' style='top:" + rowCell + "px;left:" + colCell + "px;background-color:" + game.board[row][col].color + "'></div>");
    }
  }

});
