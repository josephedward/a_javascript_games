var foods = [
    "pizza",
    "burger",
    "taco",
    "pie",
    "fried chicken",
    "chocolate",
    "ice cream",
    "cake",
    "bacon",
    "pancakes"
  ];
  

  function createButtons() {
    $(".buttons").empty();
    for (var i = 0; i < foods.length; i++) {
      var b = $("<button>");
      $(b).addClass("food btn foodButton");
      $(b).html(foods[i]);
      $(b).css("background-color",getRandomColor());
      $(".buttons").append(b);
    }
  
    $(".food").click(function() {
        $(".chefGuy").hide();
      getGifs(this);
    });
  

  }

  function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
  }
