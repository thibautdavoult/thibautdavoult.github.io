//****************************************
// Game UI and Behavior on Screen goes here
//****************************************

// $(document).ready(function () {

  // jquery stuff goes here

  game = new CoolBloqs();

function display() {
  var board = game.board.map(function(row) {
    return row.map(function(cell) {
      return "ownership: " + cell.ownership + "; color: " + cell.color;
    });
  });
  console.table(board);
}

//});

// some other stuff goes here
