'use strict';

{   
  $("#groom-mother").on("click", function() {
    $(".popup")
      .addClass("show")
      .fadeIn();
    // return false;
  });
  
  $("#close").on("click", function() {
    $(".popup").fadeOut();
    // return false;
  });
}