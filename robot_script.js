 
   var player1 = "X";
   var player2 = "O";
   var move_counter = 0;
   var board = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
   }
   var check_rows = function () {
    for (var i = 1; i <= 7; i += 3) {
      if (board[i] === board [i + 1] && board[i + 1] === board[i + 2]) {
      console.log("Win!")
    }
    }
    };

     var check_columns = function () {
    for (var i = 1; i <= 3; i += 1) {
      if (board[i] === board [i + 3] && board[i + 3] === board[i + 6]) {
      console.log("Win!")
    }
    }
    };
     var check_diagnol = function () {
    for (var i = 1; i <= 9; i += 4) {
      if (board[i] === board [i + 4] && board[i + 4] === board[i + 8]) {
      console.log("Win!")
    }
    }
    };
       var check_diagnol2 = function () {
    for (var i = 3; i <= 7; i += 2) {
      if (board[i] === board [i + 2] && board[i + 2] === board[i + 4]) {
      console.log("Win!")
    }
    }
    };
$(document).ready(function() {
// be able to set the text of a square depending on who's turn
    $(".box").on("click", function(){
    // have a way to alternate turns
        var mark = $(this).attr('id');
        
        if((move_counter % 2) === 0){
          $(this).text(player1);
          board[mark] = player1;
        
        } else {
          $(this).text(player2);
          board[mark] = player2;
        }
      check_diagnol();
      check_diagnol2();  
      check_rows();
      check_columns();
      console.log(board);  
      move_counter = move_counter + 1;  
      });
  });
