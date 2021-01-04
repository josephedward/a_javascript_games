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
          timer = duration;
          var scoreElem = displayScore();
          quiz.hide();
          $("#submit").hide();
          $("#prev").hide();
          $("#start").show()
          // $("#start").remove();
          $("#start").append(scoreElem).fadeIn();
        }
    }, 1000);
}

function displayTimer() {
    var minutes = 60,
        display = document.querySelector('#clockdiv');
    startTimer(minutes, display);
};

displayTimer();

function clear(){
  clearInterval(theInterval);
}

  //**************************************************************TRIVIA GAME***************************************************************************/

  //need more variety
  var questions = [
    {
      question:
        "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
      choices: [
        "A. William and Elizabeth",
        "B. Joseph and Catherine",
        "C. John and Mary",
        "D. George and Anne"
      ],
      correctAnswer: "C. John and Mary"
    },
    {
      question: "When did the Liberty Bell get its name?",
      choices: [
        "A. when it was made, in 1701",
        "B. when it rang on July 4, 1776",
        "C. in the 19th century, when it became a symbol of the abolition of slavery",
        "D. none of the above"
      ],
      correctAnswer:
        "C. in the 19th century, when it became a symbol of the abolition of slavery"
    },
    {
      question:
        "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
      choices: ["A. Buttermilk", "B. Daisy", "C. Scout", "D. Tulip"],
      correctAnswer: "A. Buttermilk"
    },
    {
      question:
        "The Daniel Boon museum at the home where he died can best be described how?",
      choices: [
        "A. a log cabin in Kentucky",
        "B. a two-story clapboard house in Tennessee",
        "C. a four-story Georgian-style home in Missouri",
        "D. a three story brick house in Arkansas"
      ],
      correctAnswer: "C. a four-story Georgian-style home in Missouri"
    },
    {
      question:
        "Which of the following items was owned by the fewest U.S. homes in 1990?",
      choices: [
        "A. home computer",
        "B. compact disk player",
        "C. cordless phone",
        "D. dishwasher"
      ],
      correctAnswer: "B. compact disk player"
    }
  ];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $("#quiz"); //Quiz div object
  var numCorrect = 0;
  var placeHolder = 0;

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $("#submit").on("click", function() {
    checkAnswer();
    clear();
    displayTimer();

    
    choose();
    // If no user selection, progress is stopped
    if (typeof selections[questionCounter] === "undefined") {
      alert("Please make a selection!");
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $("#prev").on("click", function() {
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $("#start").on("click", function() {
    $("#clockdiv").show();
    questionCounter = 0;
    selections = [];
    numCorrect=0;
    placeHolder=0;
    displayNext();
    $("#start").hide();
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $("<div>", {
      id: "question"
    });
    var header = $("<h2>Question " + (index + 1) + ":</h2>");
    qElement.append(header);
    var question = $("<p>").append(questions[index].question);
    qElement.append(question);
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $("<ul>");
    var item;
    var input = "";
    
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $("<li>");
      input = '<input type="radio" name="answer" value=' + i + " />";
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] =
      questions[questionCounter].choices[
        $('input[name="answer"]:checked').val()
      ]; //just the index of array
  }

  // Displays next requested element
  function displayNext() {
    
    quiz.fadeOut(function() {
      $("#question").remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!isNaN(selections[questionCounter])) {    
          $("input[value=" + selections[questionCounter] + "]").prop(
            "checked",
            true
          );
        }

        // Controls display of 'prev' button
        if (questionCounter === 1) {
          $("#prev").show();
        } else if (questionCounter === 0) {
          $("#prev").hide();
          $("#submit").show();
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $("#submit").hide();
        $("#prev").hide();
        $("#start").show();
      }
    });
  }

  function displayScore() {
    var score = $("<p>", { id: "question" });


    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append(
      "You got " +
        numCorrect +
        " questions out of " +
        questions.length +
        " right!!!"
    );
    $("#clockdiv").hide();
    selections=[];
    numCorrect=0;
    return score;
  }


  
  function checkAnswer() {
    var radioButtons;
    radioButtons = document.getElementsByTagName("input");
    var selection;
    var numCorrect = 0;

    for (x = 0; x < radioButtons.length; x++) {
      if (radioButtons[x].checked === true) {
        selection= radioButtons[x].nextSibling.data;
      }
    } //end 1st


    // for (y = 0; y < questions.length; y++) {
      if (selection=== questions[placeHolder].correctAnswer) {
        numCorrect++;
        console.log(selection);
        alert("You got the question right!");
      }
      else{
        alert("You got the question wrong :(")
      }
    // } //end second
    placeHolder++;
    $("#quiz").hide();
    // $("#submit").hide();
    console.log(numCorrect);
    
    return numCorrect;
  }









});

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
// Animates buttons on hover
//   $(".button").on("mouseenter", function() {
//     $(this).addClass("active");
//   });
//   $(".button").on("mouseleave", function() {
//     $(this).removeClass("active");
//   });
