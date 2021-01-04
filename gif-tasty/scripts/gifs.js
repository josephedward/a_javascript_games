
 
 // Gify API stuff
 var apiUrl  = "https://api.giphy.com/v1/gifs/search";
 var apiKey   = "6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv";
 // var limit     = 10;
 // var rating    = "r";


  function getGifs(topic) {
    $(topic).addClass("active");
    query = {
      "api_key"   : apiKey,
      "q"         : $(topic).html()
      // "limit"     : limit,
      // "rating"    : rating
    };
    query = $.param(query);
    path = apiUrl + "?" + query;
    $.ajax({
      url: path,
      type: 'GET',
    })
    .done(function(response) {

      $(".card-columns").empty();
      var gifs = response.data;  
        
      for (var i = 0; i < gifs.length; i++) {
        var imgSrc = gifs[i].images.fixed_height_still.url;
        console.log(imgSrc);
        var imgLink = gifs[i].url;
        var embedLink = gifs[i].embed_url;
        var title=gifs[i].title;
        var card = [
          "<div class='card'>",
          "<img class='card-img-top' src='"+imgSrc+"'>",
          "<div class='card-block'>",
          title,
          "</div>",
          "</div>"
        ];
        $(".card-columns").prepend(card.join(''));
        
      }
    })
    .fail(function() {
      console.log("error");
    });
  }
  
  // toggle pattern
  function playGif(card) {
    var imgSrc = $(card).attr("src");
    if (imgSrc.endsWith("_s.gif")) {
      imgSrc = imgSrc.replace("_s.gif", ".gif");
    } else {
      imgSrc = imgSrc.replace(".gif", "_s.gif");
    }
    $(card).attr("src", imgSrc);
  
  }
  

  


  // ************************************************unused************************
 
    // $(".rating label").change(function(event) {
    //   rating = $(this).text().trim().toLowerCase();
    //   // console.log(rating);
    // });
    // clipboard = new Clipboard('.clip');
    // clipboard.on('success', function(e) {
    //     e.clearSelection();
    //     if(e.action === "copy") {
    //       $(e.trigger).tooltip("show");
    //     }
    // });
    