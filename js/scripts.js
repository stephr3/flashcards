$(function (){
  $(".clickable").click(function() {
    $("h1", this).toggle();
    $("p", this).toggle();
  });
});
