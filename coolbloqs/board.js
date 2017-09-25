//****************************************
// Game UI and Behavior on Screen goes here
//****************************************

//****************************************
// 1. Default state on page load
//****************************************

$(document).ready(function() {
  game = new CoolBloqs();
  var visualBoard = $(".board");
  boardCreate();

// Display on actual site page

  function boardCreate() {
    for (row = 0; row < game.boardsize.length; row++) {
      for (col = 0; col < game.boardsize.width; col++) {
        var cellSize = 20;
        var rowCell = row * cellSize;
        var colCell = col * cellSize;
        var div = `<div
          class="tile"
          style="top:${rowCell}px;left:${colCell}px;background-color:${game.get(row, col).color}"
          data-row="${row}"
          data-col="${col}"
        >
        </div>`;
        visualBoard.append(div);
      }
    }
  }

  //****************************************
  // 1. Updating only tiles that need updating on play
  //****************************************

  function boardUpdate() {
    for (row = 0; row < game.boardsize.length; row++) {
      for (col = 0; col < game.boardsize.width; col++) {
        $(`div.tile[data-row="${row}"][data-col="${col}"]`).css("background-color", game.get(row, col).color);
      }
    }
  }

// rendering the board

  function render() {
    playerTurnUpdate();
    boardUpdate();
    if (game.victory !== null) {
    gameEndUpdate();
    }
  }

  function playerTurnUpdate() {
    $(".playerturn").text(function() {
      if (game.twoPlayers === 1) {
        if (game.currentPlayer === 0) {
          return "Player 1's turn";
        }
        else if (game.currentPlayer === 1) {
          return "Player 2's turn";
        }
      } else if (game.countTurns < game.maxTurns) {
        return game.countTurns + " / " + game.maxTurns + " moves left";
      } else if (game.countTurns >= game.maxTurns) {
        $(".playerturn").html("YOU LOST");
        $("button.btn-restart").show();
      }
    });
  }

  function gameEndUpdate() {
    $("button.btn-restart").show();
    if (game.twoPlayers === 1) {
      if (game.victory === 1) {
        $(".playerturn").html("PLAYER 2 WINS");
      }
      else if (game.victory === 0) {
        $(".playerturn").html("PLAYER 1 WINS");
      }
    }
    else if (game.countTurns <= game.maxTurns && game.victory === 0) {
      $(".playerturn").html("YOU WON!!");
    }
  }

  $(".playerturn").text(game.countTurns + " / " + game.maxTurns + " moves left")
  $("button.btn-restart").hide();
  $("button.btn-restart").click(function() {
     window.location.reload();
  });

//****************************************
// 2 players toggle
//****************************************

// on/off toggle switching between 2 players

$(".switch").mouseup(function() {
  switch (game.twoPlayers) {
    case 1:
      game.twoPlayers = 0;
      playerTurnUpdate();
      break;
    case 0:
      game.twoPlayers = 1;
      playerTurnUpdate();
      break;
  }
});

//****************************************
// Player's action assigned to a key
//****************************************

  $(document).keyup(function(k) {
    if (game.currentPlayer === 0) {
      if (k.keyCode === 38) {
        game.play(game.availableColors[0]);
      }
      if (k.keyCode == 39 ) {
        game.play(game.availableColors[1]);
      }
      if (k.keyCode == 40) {
        game.play(game.availableColors[2]);
      }
      if (k.keyCode == 37) {
        game.play(game.availableColors[3]);
      }
  } else {
      if (k.keyCode === 69) {
        game.play(game.availableColors[0]);
      }
      if (k.keyCode === 70) {
        game.play(game.availableColors[1]);
      }
      if (k.keyCode === 68) {
        game.play(game.availableColors[2]);
      }
      if (k.keyCode === 83){
        game.play(game.availableColors[3]);
      }
  }
    render();
  });

//****************************************
// Allowing players to click on board (especially useful for Single player on tablet/phone)
//****************************************

// to study:  $(event.target).attr("data-row")

  visualBoard.click(function(event) {
    game.play(game.get(event.target.dataset.row, event.target.dataset.col).color);
    render();
  });


// var visualBoard = $(".board");
//
//   visualBoard.click(function(cell) {
//     game.board.filter(function(row, rowIndex) {
//       game.board.filter(function(cell, colIndex) {
//         var playing = game.get(rowIndex,colIndex).color;
//
//       });     game.play(playing);
//     });
//     render();
//   });

});
