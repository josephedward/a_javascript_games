$(document).ready(function() {
  
// $(".container").hide();


// callMadLibAPI0();

createButtons();
// hideShow();
// callMadLibAPI();
createBackgroundText();
});




function createButtons(){

  $("body").append(` 
  <div class="container">
  <div id="buttonHolder">
  <div class="row-center">
 <button class="btn btn-primary btn-lg normal-button" id="getMadLib" >Get Mad Lib</button>
</div>
<div class="row-center">
<button class="btn btn-primary btn-lg normal-button" id="instructions">Instructions</button>
</div> 
</div>
</div>
`);

  $("#getMadLib").on("click",function(){
    createMadLib();

    
  });


function createMadLib(){
  $("body").append(
    `<div class="container">  
    <div id="mlTitle" ></div>
    <div class="row-center">
    <button class="btn btn-primary btn-lg normal-button" id="test">Test</button>
    </div>
     <form id="mlInput"></form>
     </div>`
        );
        $(".container:nth-of-type(1)").hide();
        $(".container:nth-of-type(2)").show();
        
        $("#mlTItle").show();
        // css("display","block");
        $("#mlInput").show()
        callMadLibAPI();
        testInput();

      }



    // createMadLib();



  function testInput(){
    console.log("cow");
    $("#test").on("click",function(){
  
    $(".form-control").each(
        function(){
           $(this).val("cow"); 
        }
    );
});

    $("form").submit(function(e) {
      e.preventDefault();    
      $(".form-control").each(function(){
          var tempTopic=$(this).val().trim();
          topics.push($(this).val().trim());     
        });
        console.log(topics);
        // console.log(getGif(topics[0]));
        weirdStatements=combineSentencesWithBlanks(sentences,topics);
  
        getImages(topics);
  
       console.log(weirdStatements);
       console.log(storyImages);
      //  createSlides(storyImages,weirdStatements);
  });
   


    
  $("#instructions").on("click", function() {
    $(".container:nth-of-type(1)").hide();

    $("body").append(`
<div class="container">  
    <iframe src="https://en.wikipedia.org/wiki/Mad_Libs" style="height:300px;width:750px;  margin-top:10%;"></iframe>
    <button class="btn btn-primary btn-lg normal-button" id="close">Close</button>
    </div>
    `);
    $(".container:nth-of-type(2)").show();   
    closer(); 
  });

  function closer() {
    $("#close").on("click", function (e) {
      e.preventDefault();
      // console.log("test");
      $(".container:nth-of-type(2)").remove();
      $(".container:nth-of-type(1)").show();
    });
  }
  }

}
// function () {

// }








// function state1(){}
// function state2(){}
// function state3(){}


/************************************unused********************************************* */

  // var test="monkey";
  
  // var slideIndex = 1;
  // showSlides(slideIndex);



// var storyImages=[];

// function createStory(madLibTopicsArr){
// for(x=0;x<madLibTopicsArr.length;x++)
// {
// getGif(madLibTopicsArr[x]);
// }


// }


//call once 
//or each time? 


//  // Gify API stuff
//  var apiurl  = "https://api.giphy.com/v1/gifs/search";
//  var apikey   = "6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv";
// //  var limit     = 10;
// //  var rating    = "r";

// function getGifs(topic) {
//   $(topic).addClass("active");
//   query = {
//     "api_key"   : apikey,
//     "q"         : $(topic).html()
//     // "limit"     : limit,
//     // "rating"    : rating
//   };
//   query = $.param(query);
//   path = apiurl + "?" + query;
//   path=`https://api.giphy.com/v1/gifs/random?api_key=6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv&tag=${topic}&rating=G`;
//   $.ajax({
//     url: path,
//     type: 'GET',
//   })
//   .done(function(response) {
// // console.log(response.data.images[0]);
//     $(".card-columns").empty();
//     var gifs = response.data;  
//       console.log(gifs);

//     for (var i = 0; i < gifs.length; i++) {
//       var imgSrc = gifs[i].images.fixed_height_still.url;
//       console.log(imgSrc);
//       var imgLink = gifs[i].url;
//       var embedLink = gifs[i].embed_url;
//       var title=gifs[i].title;
//       var card = [
//         "<div class='card'>",
//         "<img class='card-img-top' src='"+imgSrc+"'>",
//         "<div class='card-block'>",
//         title,
//         "</div>",
//         "</div>"
//       ];
//       $(".card-columns").prepend(card.join(''));
      
//     }

//   })
//   .fail(function() {
//     console.log("error");
//   });

// }


// Gify API stuff
    // var limit     = 10;
    // var rating    = "r";
   
      //  var apiUrl  = "https://api.giphy.com/v1/gifs/search";
      //  var apiKey   = "6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv";


      //  // $(topic).addClass("active");
      //  query = {
      //    "api_key"   : apiKey,
      //    "q"         : $(topic).html()
      //    // "limit"     : limit,
      //    // "rating"    : rating
      //  };
      //  query = $.param(query);
      //  path = apiUrl + "?" + query;





// $("#submit").on("click",function(){
//     var topics=[];
//     $(".form-control").each(function(){
//         console.log($(this));
//         // topics.push($(this).val().trim());
//         // .css("background-color",getRandomColor);
//       });
//       console.log(topics);
// });



