$(document).ready(function() {
  //**********************************************************************TIMER STUFF************************************************************************** */
  



var theInterval;


  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
  theInterval= setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          clearAnswers();  
          timer = duration;
            
        }
    }, 1000);
}

function displayTimer() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#clockdiv');
    startTimer(fiveMinutes, display);
};

displayTimer();

function clear(){
  clearInterval(theInterval);
}


  //**************************************************************TRIVIA GAME***************************************************************************/

  var questions = [
    {
      question:
        "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
      // choices: [
      //   "A. William and Elizabeth",
      //   "B. Joseph and Catherine",
      //   "C. John and Mary",
      //   "D. George and Anne"
      // ],
      correctAnswer: "C. John and Mary"
    },
    {
      question: "When did the Liberty Bell get its name?",
      // choices: [
      //   "A. when it was made, in 1701",
      //   "B. when it rang on July 4, 1776",
      //   "C. in the 19th century, when it became a symbol of the abolition of slavery",
      //   "D. none of the above"
      // ],
      correctAnswer:
        "C. in the 19th century, when it became a symbol of the abolition of slavery"
    },

    {
      question:
        "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
      // choices: ["A. Buttermilk", "B. Daisy", "C. Scout", "D. Tulip"],
      correctAnswer: "A. Buttermilk"
    },
    {
      question:
        "The Daniel Boon museum at the home where he died can best be described how?",
      // choices: [
      //   "A. a log cabin in Kentucky",
      //   "B. a two-story clapboard house in Tennessee",
      //   "C. a four-story Georgian-style home in Missouri",
      //   "D. a three story brick house in Arkansas"
      // ],
      correctAnswer: "C. a four-story Georgian-style home in Missouri"
    },
    {
      question:
        "Which of the following items was owned by the fewest U.S. homes in 1990?",
      // choices: [
      //   "A. home computer",
      //   "B. compact disk player",
      //   "C. cordless phone",
      //   "D. dishwasher"
      // ],
      correctAnswer: "B. compact disk player"
    }
  ];

  function checkAnswer() {
    var radioButtons;
    radioButtons = document.getElementsByTagName("input");
    var selection = [];
    var placeHolder = 0;
    var numCorrect = 0;

    for (x = 0; x < radioButtons.length; x++) {
      if (radioButtons[x].checked === true) {
        selection[placeHolder] = radioButtons[x].nextSibling.data;
        placeHolder++; //the identical names prevent multiples from bieing checked and thus keep this variable in order
      }
    } //end 1st


    for (y = 0; y < questions.length; y++) {
      if (selection[y] === questions[y].correctAnswer) {
        numCorrect++;
        console.log(selection[y]);
      }
    } //end second
    $("#quiz").hide();
    $("#submit").hide();
    console.log(numCorrect);
    alert("You got "+numCorrect+" out of "+questions.length+" correct!");
    return numCorrect;
  }


function clearAnswers()
{
  radioButtons = document.getElementsByTagName("input");
  for (x = 0; x < radioButtons.length; x++) 
  {
  radioButtons[x].checked=false;
  }
  $("#quiz").show(); 
  $("#submit").show(); 
  numCorrect=0;
  $("#clockdiv").empty();
  clear();
  // run_clock("clockdiv", deadline);//doesn't work need to clearinterval
  displayTimer();

}







//***************************************************************ONCLICK EVENTS****************************************************/

  $("#submit").on("click", function() {
    
    checkAnswer();

  });


  $("#start").on("click", function(e) {
    
    clearAnswers();
  });



}); //END DOC READY













/***************************************************************TRIVIA QUESTIONS******************************************************** */
// C. John and Mary
// C. in the 19th century, when it became a symbol of the abolition of slavery
// A. Buttermilk
// C. a four-story Georgian-style home in Missouri
// B. compact disk player

// In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?
// A. William and Elizabeth
// B. Joseph and Catherine
// C. John and Mary
// D. George and Anne

// When did the Liberty Bell get its name?
// A. when it was made, in 1701
// B. when it rang on July 4, 1776
// C. in the 19th century, when it became a symbol of the abolition of slavery
// D. none of the above

// In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?
// A. Buttermilk
// B. Daisy
// C. Scout
// D. Tulip

// The Daniel Boon museum at the home where he died can best be described how?
// A. a log cabin in Kentucky
// B. a two-story clapboard house in Tennessee
// C. a four-story Georgian-style home in Missouri
// D. a three story brick house in Arkansas

// Which of the following items was owned by the fewest U.S. homes in 1990?
// A. home computer
// B. compact disk player
// C. cordless phone
// D. dishwasher

// Who holds the record for the most victories in a row on the professional golf tour?
// A. Jack Nicklaus
// B. Arnold Palmer
// C. Byron Nelson
// D. Ben Hogan

// Who is third behind Hank Aaron and Babe Ruth in major league career home runs?
// A. Reggie Jackson
// B. Harmon Killebrew
// C. Willie Mays
// D. Frank Robinson

// In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?
// A. 8
// B. 18
// C. 38
// D. 58

// During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?
// A. cocker spaniel
// B. German shepherd
// C. Labrador retriever
// D. poodle.

// In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?
// A. 10 percent
// B. 15 percent
// C. 31 percent
// D. 51 percent

// The first black American pictured on a U.S. postage stamp was who?
// A. Frederick Douglass
// B. Booker T. Washington
// C. Louis Armstrong
// D. Joe Louis

// 2. What did the "D" in "D-Day" stand for?
// A. doom
// B. day
// C. Dwight (Eisenhower)
// D. Dunkirk

// 20. The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?
// A. $1
// B. $5
// C.$10
// D.$20

// Which of these characters turned 40 years old in 1990?
// A. Charlie Brown
// B. Bugs Bunny
// C. Mickey Mouse
// D. Fred Flintstone

// The Philadelphia mint started putting a "P" mint mark on quarters when?
// A. 1960
// B. 1980
// C. never

// Before becoming George Bush's Secretary of Defense, what was Dick Cheney's position?
// A. congressman from Wyoming
// B. governor of New Hampshire
// C. secretary of defense under Ronald Reagan

// When Mt. St. Helens erupted on May 18, 1980, how many people were killed?
// A. 1
// B. 57
// C. 571

// In J. Edgar Hoover, what did the J stand for?
// A. James
// B. John
// C. Joseph

// Florence Nightingale became known as "the Lady With the Lamp" during which war?
// A. American Civil War
// B. Crimean War
// C. World War I

// What year was it that the Census Bureau first reported that a majority of new mothers  were remaining in the new job market?
// A. 1968
// B. 1978
// C. 1988

// C. John and Mary
// C. in the 19th century, when it became a symbol of the abolition of slavery
// A. Buttermilk
// C. a four-story Georgian-style home in Missouri
// B. compact disk player
// C. Byron Nelson
// C. Willie Mays
// B. 18
// A. cocker spaniel
// C. 31 percent
// D. Joe Louis
// B. day
// A. $1
// A. Charlie Brown
// B. 1980
// A. congressman from Wyoming
// B. 57
// B. John
// B. Crimean War
// C. 1988

// **********************************************************unused****************************************************************************************





















  // //need a reset function
  // var time_in_minutes = 2;
  // var current_time = Date.parse(new Date());
  // var deadline = new Date(current_time + time_in_minutes * 60 * 1000);

  // function time_remaining(endtime) 
  // {
  //   var t = Date.parse(endtime) - Date.parse(new Date());
  //   var seconds = Math.floor((t / 1000) % 60);
  //   var minutes = Math.floor((t / 1000 / 60) % 60);
  //   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  //   var days = Math.floor(t / (1000 * 60 * 60 * 24));
  //   //if time runs out
  //   //submit quiz answers
  //   //display results
  //   if (t === 0) 
  //   {
  //     checkAnswer();
  //   }
  //   return {
  //     total: t,
  //     days: days,
  //     hours: hours,
  //     minutes: minutes,
  //     seconds: seconds
  //   };
  // }

  // function timeFormatter(time) {
  //   // var formatDigit
  //   if (time.seconds < 10) {
  //     time.seconds = "0" + time.seconds;
  //   }
  //   if (time.minutes < 10) {
  //     time.minutes = "0" + time.minutes;
  //   }
  //   if (time.hours < 10) {
  //     time.hours = "0" + time.hours;
  //   }
  //   if (time.days < 10) {
  //     time.days = "0" + time.days;
  //   }
  //   var timeString =
  //     time.days +
  //     " : " +
  //     time.hours +
  //     " : " +
  //     time.minutes +
  //     " : " +
  //     time.seconds;
  //   return timeString;
  // }

  // function run_clock(id, endtime, flag) {
  //   var clock = document.getElementById(id);
  //   function update_clock() {
  //     var t = time_remaining(endtime);
  //     clock.innerHTML = timeFormatter(t);
  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     }


  //   }
  //   update_clock(); // run function once at first to avoid delay
  //   var timeinterval = setInterval(update_clock, 1000);
  // }
  // run_clock("clockdiv", deadline);




//need more variety
//   var questions = [
//     {
//       question:
//         "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
//       // choices: [
//       //   "A. William and Elizabeth",
//       //   "B. Joseph and Catherine",
//       //   "C. John and Mary",
//       //   "D. George and Anne"
//       // ],
//       correctAnswer: "C. John and Mary"
//     },
//     {
//       question: "When did the Liberty Bell get its name?",
//       // choices: [
//       //   "A. when it was made, in 1701",
//       //   "B. when it rang on July 4, 1776",
//       //   "C. in the 19th century, when it became a symbol of the abolition of slavery",
//       //   "D. none of the above"
//       // ],
//       correctAnswer:
//         "C. in the 19th century, when it became a symbol of the abolition of slavery"
//     },
//     {
//       question:
//         "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
//       // choices: ["A. Buttermilk", "B. Daisy", "C. Scout", "D. Tulip"],
//       correctAnswer: "A. Buttermilk"
//     },
//     {
//       question:
//         "The Daniel Boon museum at the home where he died can best be described how?",
//       // choices: [
//       //   "A. a log cabin in Kentucky",
//       //   "B. a two-story clapboard house in Tennessee",
//       //   "C. a four-story Georgian-style home in Missouri",
//       //   "D. a three story brick house in Arkansas"
//       // ],
//       correctAnswer: "C. a four-story Georgian-style home in Missouri"
//     },
//     {
//       question:
//         "Which of the following items was owned by the fewest U.S. homes in 1990?",
//       // choices: [
//       //   "A. home computer",
//       //   "B. compact disk player",
//       //   "C. cordless phone",
//       //   "D. dishwasher"
//       // ],
//       correctAnswer: "B. compact disk player"
//     }
//   ];

//   //need 5 separate checks for 5 separate radio button names?
//  var selects= document.getElementsByTagName("input");
//  var tempObjs=[];

//  for(x=0;x<selects.length;x++)
//  {
//  tempObjs.push(document.getElementById("a"));

// }

//   var questionCounter = 0; //Tracks question number
//   var selections = []; //Array containing user choices
//   var quiz = $("#quiz"); //Quiz div object



// Animates buttons on hover
//   $(".button").on("mouseenter", function() {
//     $(this).addClass("active");
//   });
//   $(".button").on("mouseleave", function() {
//     $(this).removeClass("active");
//   });
// Display initial question
// displayQuestions();

//   var numCorrect = 0;

//   var selections=$('input[type=radio]:checked');
//   for(x=0;x<questions.length;x++)
//   {
//    console.log(selections[x].next().text);
//     if(selections[x]===questions[x].correctAnswer)
//     {
//     numCorrect++;

//     }

//   }
//   console.log(numCorrect);
//   displayScore(numCorrect);

//   // $("#quiz").hide();
//   // var scoreElem = displayScore();
//   // console.log(scoreElem);
//   // quiz.append(scoreElem).fadeIn();
//   // $("#next").hide();
//   // $("#prev").hide();
//   // $("#start").show();
//   // // e.preventDefault();

//   // // Suspend click listener during fade animation
//   // if (quiz.is(":animated")) {
//   //   return false;
//   // }
//   // choose();
//   // // If no user selection, progress is stopped
//   // if (typeof selections[questionCounter] === "undefined") {
//   //   alert("Please make a selection!");
//   // } else {
//   //   questionCounter++;
//   //   displayNext();
//   // }
// });

// // Click handler for the 'prev' button
// $("#prev").on("click", function(e) {
//   e.preventDefault();
//   if (quiz.is(":animated")) {
//     return false;
//   }
//   choose();
//   questionCounter--;
//   displayNext();
// });

// Click handler for the 'Start Over' button

//     e.preventDefault();
//     if (quiz.is(":animated")) {
//       return false;
//     }
//     questionCounter = 0;
//     selections = [];
//     displayNext();
//     $("#start").hide();
//   });
//   $(".radioButtons").on("click", function(e) {
//    choose();
//   });

//   // Creates and returns the div that contains the questions and
//   // the answer selections
//   // function createQuestionElement(index) {
//   //   var qElement = $("<div>", {
//   //     id: "question"
//   //   });
//   //   var header = $("<h2>Question " + (index + 1) + ":</h2>");
//   //   qElement.append(header);
//   //   var question = $("<p>").append(questions[index].question);
//   //   qElement.append(question);
//   //   var radioButtons = createRadios(index);
//   //   qElement.append(radioButtons);
//   //   return qElement;
//   // }

//   // // Creates a list of the answer choices as radio inputs
//   // function createRadios(index) {
//   //   var radioList = $("<ul>");
//   //   var item;
//   //   var input = "";
//   //   for (var i = 0; i < questions[index].choices.length; i++) {
//   //     item = $("<li>");
//   //     input = '<input type="radio" name="answer" value=' + i + " />";
//   //     input += questions[index].choices[i];
//   //     item.append(input);
//   //     radioList.append(item);
//   //   }
//   //   return radioList;
//   // }

//   // Reads the user selection and pushes the value to an array
//   function choose() {
//     selections[questionCounter] =
//       questions[questionCounter].choices[
//         $('input[name="answer"]:checked').val()
//       ]; //just the index of array
//   }

//   // Displays next requested element
//   function displayQuestions() {
//     // quiz.fadeOut(function() {
//     //   $("#question").remove();

//     for(x=0;x<questions.length;x++)
//     {

//       if (questionCounter < questions.length) {
//         var nextQuestion = createQuestionElement(questionCounter);
//         quiz.append(nextQuestion).fadeIn();
//         if (!isNaN(selections[questionCounter])) {
//           $("input[value=" + selections[questionCounter] + "]").prop(
//             "checked",
//             true
//           );
//         }
//       }      questionCounter++;
//     //     // Controls display of 'prev' button
//     //     if (questionCounter === 1) {
//     //       $("#prev").show();
//     //     } else if (questionCounter === 0) {
//     //       $("#prev").hide();
//     //       $("#next").show();
//     //     }
//     //   } else {
//     //     var scoreElem = displayScore();
//     //     quiz.append(scoreElem).fadeIn();
//     //     $("#next").hide();
//     //     $("#prev").hide();
//     //     $("#start").show();
//     //   }
//     // });
//   }
//   }
//   function displayScore(numCorrect) {

//     var score = $("<p>", { id: "question" });

//     // for (var i = 0; i < selections.length; i++) {
//     //   if (selections[i] === questions[i].correctAnswer) {
//     //     numCorrect++;
//     //   }
//     // }

//     score.append(
//       "You got " +
//         numCorrect +
//         " questions out of " +
//         questions.length +
//         " right!!!"
//     );
//     return score;
//   }
// });
