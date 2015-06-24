$(document).ready(function(){
  $(".calculate").click(function() {

    var clothePrice = $('input[name="x"]').val(); // price of clothing piece
    var freq = $('input[name="y"]').val(); // n° of days worn per week
    var years = $('input[name="z"]').val(); // n° of years we'll wear it
    var dailyCost = clothePrice / (freq * 51 * years); // 
    var rounded = Math.round(dailyCost * 10) / 10;
    $('.result').html(dailyCost + " <- not rounded version");
    $('.rounded').html(rounded + "$ / day");
  });


});



