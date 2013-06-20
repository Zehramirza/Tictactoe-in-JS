 
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


$(document).ready(function() {
// be able to set the text of a square depending on who's turn
    $(".box").on("click", function(){
    // have a way to alternate turns
        if(move_counter % 2 === 0){
          $(this).text(player1);
          var mark = $(this).attr('id');
          console.log(mark);
          board[mark] = player1;
        } else {
          $(this).text(player2);
        }
      move_counter = move_counter + 1;  
    });
   


  // $(".box").on("click", function(){
  //   $(this).text(player1)
  //   // $(this).children().toggleClass("dont-display");
  // });

  var sayHello = function (){
    var answer = prompt("Hey hows it going?");
    console.log(answer);
  }

});