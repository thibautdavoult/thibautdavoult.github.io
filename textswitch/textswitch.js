$(document).ready(function(){
  $(".textswitch").click(function(){
    $(this).toggleClass("hidden").next().removeClass("hidden");
  });
});





// $(".textswitch").bind('click', function() {
//     var $this = $(this);
//     $this.html($this.html() == 'string1' ? 'string2' : 'string1');
//
// });
//
// $(".textswitch").click(function() {
//   var $this = $(this);
//   $this.fadeOut(function(){
//     $this.next().fadeIn();
//   });



// });
// });
