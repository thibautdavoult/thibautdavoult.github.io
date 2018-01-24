$("document").ready(function() {
  $(".clickappear").click(function() {
    var id = $(this).data("id");
    $(`.choice${id}`).removeClass("hidden");
  });
});
