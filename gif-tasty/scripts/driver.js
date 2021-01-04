$(document).ready(function() {
  
    createButtons();
  
    $("form").submit(function(e) {
      e.preventDefault();
      newTopic = $("#food").val().trim();
      if(newTopic !== "") {
        topics.push($("#food").val().trim());
        createButtons(true);
      }
      this.reset();
    });
  
    $(".gifs").on("click", ".card-img-top", function() {
      playGif(this);
    });
  
    $(".gifs").on("click", ".clip", function(e) {
      e.preventDefault();
    });
  

  
  });
