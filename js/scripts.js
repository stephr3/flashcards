$(function (){
  $(".clickable").click(function() {
    $(this).children().toggle();
    // $("p", this).toggle();
  });

  $("button#meow").click(function(){
    $("ul#kitty").prepend("<li>Meow!</li>");
    $("ul#doggy").prepend("<li>Woof!</li>");
    $("ul#kitty").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#doggy").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#bark").click(function(){
    $("ul#doggy").prepend("<li>Woof!</li>");
    $("ul#kitty").prepend("<li>Meow!</li>");
    $("ul#kitty").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#doggy").children("li").first().click(function(){
      $(this).remove();
    });
  });
});
