//****************************************
// Game UI and Behavior on Screen goes here
//****************************************

//****************************************
// 1. Default state on page load
//****************************************

$(document).ready(function () {

  game = new CoolBloqs();
  var visualBoard = $(".board");


// function to display board in console

display = function() {
  var board = game.board.map(function(row) {
    return row.map(function(cell) {
      return "ownership: " + cell.ownership + "; color: " + cell.color;
    });
  });
  console.table(board);
};

  // Display on actual site page

boardUpdate = function() {

  var that = this;

  for (row = 0; row < game.boardsize.length; row++) {
    for (col = 0; col < game.boardsize.width; col++) {
      var cellSize = 50;
      var rowCell = row * cellSize;
      var colCell = col * cellSize;
      visualBoard.append("<div class='tile' style='top:" + rowCell + "px;left:" + colCell + "px;background-color:" + game.get(row, col).color + "'></div>");
    }
  }
};

boardUpdate();
display();

//****************************************
// 2. Player's action assigned to a key
//****************************************

$(document).keyup(function(k) {
  if (k.keyCode === 38) {
    game.play(game.availableColors[0]);
  } if (k.keyCode == 39) {
    game.play(game.availableColors[1]);
  } if (k.keyCode == 40) {
    game.play(game.availableColors[2]);
  } if (k.keyCode == 37) {
    game.play(game.availableColors[3]);
  }
    boardUpdate();
    display();
});

  //****************************************
  // 1. Board update on players' actions
  //****************************************

});
