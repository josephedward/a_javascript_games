
  var topics=[];
  var storyImages=[];
  var keys=[
    "p4PynOluMT5lO6QIwyObj5Xzz1hekbil",//madlib11
    "d5tvJhAYOW4akUhKNH7YqR7UE7ib4Ihe",//madlib10
    "424ViHQnz3R7CPLmXYIuGFjtQHOqcLII",//madlib9
    "PSSyIxybE5tiYPMDDh9uzwzsLRgptTzP",//madlib8
    "3sB9PK7ynZRUcERBHbAUW2xUmdFdA4ra",//madlib7
    "0S38Jy8NVIPf0x33sG5DWRaEvCrC1Jxn",//madlib6
    "GcMSFI5AoUUGsRBiuEKY0DQh62THxetf",//madlib5
    "970qVtUoWFg0k8MspYq2bTEq3UdPS8HD",//madlib4
    "TY88gjUPYwBo0CN0b02IkmVbwf2wAwL5",//madlib3
    "yFYGruZMCCBUAz64XT4PJOX1XUYeRw6X",//madlib2
    "eaNYbx8oMYb1EAbexGy1PZPuWXqW0w41",//madlib1
    "6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv",//madlib
  ];
var weirdStatements=[];


function getImages(topics){
for(x=0;x<topics.length;x++)
{
  getGifs(topics[x],weirdStatements);
}
for(x=0;x<storyImages.length;x++)
{
$(storyImages[x]).$(".slideImage").append("<h3>"+weirdStatements[x]+"</h3>")
}
$('body').css("all","unset");
$(".container:nth-of-type(1)").hide();
$(".container:nth-of-type(2)").hide();
$("body").append(`<div class='container'>${storyImages}</div>`);

}




function getRandomItem(arr){
    var randIndex=parseInt(Math.floor(Math.random() * arr.length));
    var randItem=arr[randIndex];
    return randItem;
    }

    var count=0;
function getGifs(topic, weirdStatements) {

  $(topic).addClass("active");
       var imgSrc;
       var tempKey=getRandomItem(keys);
       path=`https://api.giphy.com/v1/gifs/random?api_key=${tempKey}&tag=${topic}&rating=G`;
       $.ajax({
         url: path,
         type: 'GET',
       })
       .done(function(response) {
        var gifs = response.data;
          imgSrc = gifs.images.fixed_height.url; 

          // var imageToAppend=$("<div><img src="+imgSrc+" class='slideImage'></div>");
          var card = [
            "<div class='card'>",
            "<img class='card-img-top slideImage' src='"+imgSrc+"'>",
            "<div class='card-block'>",
            weirdStatements[count],
            "</div>",
            "</div>"
          ];
          $("body").append(card);
          count++;
          $("#slideshow").append(imageToAppend);
          storyImages.push(imageToAppend);
          // 
          //  $(".slideshow-container").append("<img src="+imgSrc+" >");
       })
       .fail(function() {
         console.log("error");
       });
     }
   


/**********************************Unused**************************************************** *//******************************************************** */
// var image=$(`<img src='${storyImages[0]}'style='width:100%'>`);
// createSlides(storyImages);
// $(".").show();
// $(".slideshow-container").append(image);
// " <img src="+storyImages[0]+" style='width:100%'>");



// var topicImgs=[];
      //  path=`https://api.giphy.com/v1/gifs/search?api_key=6aJGcOZM6D5TfU3Ptk0Hkim49Je9DsJv&q=${topic}`;


// console.log(imgSrc);
        // gif.images[randIndex].fixed_height.url;
        

        // for (var i = 0; i < gifs.length; i++) {
        //   var imgSng = gifs[i].images.fixed_height_still.url;
          
        //   topicImgs.push(imgSng);
        // }