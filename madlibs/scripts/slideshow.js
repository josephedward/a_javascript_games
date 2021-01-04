

function hideShow(){
    $("#slideshow").hide();
    }

    
    
    function createSlides(storyImages, weirdStatements){
      $(".container").hide();
      $("body").css("all","unset");
 console.log(storyImages);
 console.log("test");
 console.log(weirdStatements.length);
 console.log(storyImages.length);
    $("#slideshow").show();
 $("#slideshow > div:gt(0)").hide();
 setInterval(function() { 
  $('#slideshow > div:first')
  // &&'#slideshow > div:second')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');

  },  3000);

    }

//*****************************************************unused******************************************************************************************************************** */

// var slideIndex=0;
// storyImages.length;


    
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }
    
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }
    




   // var imageToAppend=$("<div><img src="+storyImages[x]+"></div>");
// console.log(imageToAppend);
      // theGif=getGif(madLibTopicArr);

      // $(storyImages[x]).appendTo("#slideshow");
        // `<div class="carousel-item active">
//       <img class="d-block w-100" src="${storyImages[x]}" alt="First slide">
// //     </div>`
//         `<div class="mySlides fade">
//         <div class="numbertext">${x} / ${storyImages.length}</div>
//         <img src="${storyImages[x]}" style="width:100%">
//         <div class="text">${weirdStatements[x]}</div>
//       </div>`
      //still need to add sentence to slide
      //and slide movement buttons
       
    // function runShow(){  

    // function showSlides(n) {
    //   var i;
    //   var slides = document.getElementsByClassName("mySlides");
    //   var dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {slideIndex = 1}    
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";  
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";  
    //   dots[slideIndex-1].className += " active";
    // }