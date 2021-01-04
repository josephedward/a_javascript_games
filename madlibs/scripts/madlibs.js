

    var sentences=[];
    

function combineSentencesWithBlanks(sentences,topics){
var newArr=[];
var newArr1=[];
var newArr2=[];
var wholeString;
for(x=0;x<sentences.length||x<topics.length;x++)
{
    try{
   topics[x]=topics[x].replace(",","");
    newArr[x]=sentences[x]+topics[x];
    newArr2[x]=newArr[x].replace(/([/n .,;]+)/g,'$1§sep§').split('§sep§');
   newArr2[x]=newArr2[x].join();
newArr2[x]=newArr2[x].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}catch{
    console.error();
}
}
return newArr2;
}



    function callMadLibAPI(){

        var apiURL="http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25";
        $.ajax({
            url: apiURL,
            type: 'GET',
          })    .done(function(response) {
              sentences=response.value;
              console.log(sentences);
              $("#mlTitle").append(`<h1>${response.title}</h1>`);
          var prompts=response.blanks;
          for(x=0;x<prompts.length;x++)
          {
           var field=
            `<div class='form-group row'>
            <div class="col">
            <label for='input_field' style="float:right">${prompts[x]}</label>
            </div>
            <div class="col">
            <input type='input_content' class="form-control"  id="content" placeholder='${prompts[x]}'>
            </div>
            </div>`;
           $("form").append(field);
        }
        $("form").append( "<button id='submit' class='btn btn-primary'>Submit</button>");
        
        });
    
    };
    
    function callMadLibAPI0(){
        $("#mlTitle").empty();
        $("#mlInput").empty();
        var numBlanks=parseInt(Math.floor(Math.random()*10)+1);
        console.log(numBlanks);
       var q=getRandomItem(paragraphs);
       console.log(q);
        var apiURL=`http://cors-anywhere.herokuapp.com/http://libberfy.herokuapp.com?blanks=${numBlanks}&html_form=1&q=${q}`;
        $.ajax({
            url: apiURL,
            type: 'GET',
          })    .done(function(response) {
            console.log(response);
         
        });
    
    };

    function callMadLibAPI1(){
        $("#mlTitle").empty();
        $("#mlInput").empty();
        //call the other better api
        //variables
        //number of blanks
        //html form is alwasy true (1)
        //the actual text to submit...what is a good source?
        // var numBlanks=0;
        // var q="";
        //  var numBlanks=1;

        // var qs=q.split( /[\.!\?]+/ );
        // console.log(qs);
        
    //    for(x=0;x<qs.length;x++)
    //    {
        // var apiURL=`http://libberfy.herokuapp.com?blanks=${numBlanks}&html_form=1&q=${qs[x]}`;
        var apiURL=`http://cors-anywhere.herokuapp.com/http://libberfy.herokuapp.com?blanks=${numBlanks}&html_form=1&q=${q}`;
        console.log(apiURL);
        $.ajax({
            url: apiURL,
            type: 'GET',
          }).done(function(response) {
            console.log(response);
            // sentences.push(response);
            // console.log(sentences[x]);
              
          });
        // }

        }
    
        
//     
    
    

    //***********************************************************unused******************************************************************************************************************* */
       
    // function callMadLibAPI2(){
        //         $("#mlTitle").empty();
        //         $("#mlInput").empty();
        //         //call the other better api
        //         //variables
        //         //number of blanks
        //         //html form is alwasy true (1)
        //         //the actual text to submit...what is a good source?
        //         var numBlanks=0;
        //         var q="";
        
        
        //         // var apiURL="http://cors-anywhere.herokuapp.com/https://randomwordgenerator.com/sentence.php";
        //         var apiURL="http://cors-anywhere.herokuapp.com/http://watchout4snakes.com/wo4snakes/Random/RandomParagraph"
        //         $.ajax({
        //             url: apiURL,
        //             type: 'GET',
        //           })    .done(function(response) {
        //  console.log(response);
        
        // // console.log($(response.contains("result")));
        //     });
            
        //     }    
            
    // var x = document.getElementById("instructionText");
        // if (x.style.display === "none") {
        //   x.style.display = "block";
        // } else {
        //   x.style.display = "none";
        // }

// newArr2[x]=newArr2[x].str.split('/').join(',');
// newArr2[x]=newArr2[x].replace(/\n/g, '');
// newArr2[x]=newArr2[x].replace(/\//g, '');
// newArr2[x]=newArr2[x].replace(/\\/g, '');
// newArr2[x]=newArr2[x].replace(/\s{2,}/g,"");
// newArr2[x]=newArr2[x].str.split('/').join(',');
 
//    console.log(newArr2[x]);

// wholeString=newArr.join();
// console.log(wholeString);


// newArr1=wholeString.match(/\b(\w+\W+)/g);
// newArr2=wholeString.replace(/([/n .,;]+)/g,'$1§sep§').split('§sep§');
// //works ok
// console.log(newArr1);
// console.log(newArr2);
// var newStr=tempStr.match(/\b(\w+\W+)/g);
//     var newStr1=tempStr.replace(/([/n .,;]+)/g,'$1§sep§').split('§sep§');
//    newArr1[x]=newStr
//    newArr2[x]=newStr1

//     console.log(newArr[x]);
//    console.log(newStr);
//     console.log(newStr1);

// // 
// console.log(newArr);
// console.log(newArr1);
// console.log(newArr2);

