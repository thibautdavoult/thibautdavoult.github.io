//****************************************
// Game UI and Behavior on Screen goes here
//****************************************

//****************************************
// 1. Default state on page load
//****************************************

$(document).ready(function() {
  game = new CoolBloqs();
  var visualBoard = $(".board");
  render();

  // Display on actual site page

  function boardUpdate() {
    var that = this;

    for (row = 0; row < game.boardsize.length; row++) {
      for (col = 0; col < game.boardsize.width; col++) {
        var cellSize = 25;
        var rowCell = row * cellSize;
        var colCell = col * cellSize;
        visualBoard.append(
          "<div class='tile' style='top:" +
            rowCell +
            "px;left:" +
            colCell +
            "px;background-color:" +
            game.get(row, col).color +
            "'></div>"
        );
      }
    }
  }

  function render() {
    playerTurnUpdate();
    boardUpdate();
    gameEndUpdate();
  }

  function playerTurnUpdate() {
    $(".playerturn").text(function() {
      if (game.currentPlayer === 0) {
        return "Player 1's turn";
      }
      else if (game.currentPlayer === 1) {
        return "Player 2's turn";
      }
    });
  }

  function gameEndUpdate() {
    if (game.victory === 1) {
      $(".playerturn").text("Player 2 WINS");
    }
    else if (game.victory === 0) {
      $(".playerturn").text("Player 1 WINS");
    }
  }
  //****************************************
  // 2. Player's action assigned to a key
  //****************************************

  $(document).keyup(function(k) {
    if (k.keyCode === 38 || k.keyCode === 69) {
      game.play(game.availableColors[0]);
    }
    if (k.keyCode == 39  || k.keyCode === 70 ) {
      game.play(game.availableColors[1]);
    }
    if (k.keyCode == 40  || k.keyCode === 68) {
      game.play(game.availableColors[2]);
    }
    if (k.keyCode == 37  || k.keyCode === 83) {
      game.play(game.availableColors[3]);
    }
    render();
  });
});
