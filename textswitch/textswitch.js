$(document).ready(function(){
//   $('span.active').click(function(){
//     $("span.active").toggleClass("hidden");
//     $("span.hidden").toggleClass("active");
//   });
// });

$(".textswitch").bind('click', function() {
    var $this = $(this);
    $this.html($this.html() == 'string1' ? 'string2' : 'string1');

});
//
// $(".textswitch").click(function() {
//   var $this = $(this);
//   $this.fadeOut(function(){
//     $this.next().fadeIn();
//   });



// });
});
