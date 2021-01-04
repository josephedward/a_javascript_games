$(document).ready(function() {
  // *********************************************************globals **********************************************
  var $yourFighter = {
    healthPoints: 0,
    attackPoints: 0
  };
  var theOpponent = {
    healthPoints: 0,
    attackPoints: 0
  };

  var base;
  var wins = 0;

  // *********************************************************calls **********************************************
  hideBadGuys();
  set();

  // *********************************************************functions **********************************************

  function setHealthPoints() {
    var hP = Math.floor(Math.random() * 100) + 50;
    return hP;
  }

  function setAttackPoints() {
    var aP = Math.floor(Math.random() * 10) + 5;
    return aP;
  }

  function set() {
    $("#g1 .healthPoints").text(setHealthPoints);
    $("#g1 .attackPoints").text(setAttackPoints);
    $("#g2 .healthPoints").text(setHealthPoints);
    $("#g2 .attackPoints").text(setAttackPoints);
    $("#g3 .healthPoints").text(setHealthPoints);
    $("#g3 .attackPoints").text(setAttackPoints);
    $("#g4 .healthPoints").text(setHealthPoints);
    $("#g4 .attackPoints").text(setAttackPoints);
    $("#g5 .healthPoints").text(setHealthPoints);
    $("#g5 .attackPoints").text(setAttackPoints);

    $("#b1 .healthPoints").text(setHealthPoints);
    $("#b1 .attackPoints").text(setAttackPoints);
    $("#b2 .healthPoints").text(setHealthPoints);
    $("#b2 .attackPoints").text(setAttackPoints);
    $("#b3 .healthPoints").text(setHealthPoints);
    $("#b3 .attackPoints").text(setAttackPoints);
    $("#b4 .healthPoints").text(setHealthPoints);
    $("#b4 .attackPoints").text(setAttackPoints);
    $("#b5 .healthPoints").text(setHealthPoints);
    $("#b5 .attackPoints").text(setAttackPoints);
  }

  //needs to display single character
  //in fighting section?
  function hideGoodGuys() {
    var x = document.getElementById("goodGuys");
    x.style.display = "none";
  }

  function showGoodGuys() {
    var x = document.getElementById("goodGuys");
    x.style.display = "block";
  }

  function hideBadGuys() {
    var y = document.getElementById("badGuys");
    y.style.display = "none";
  }

  function showBadGuys() {
    var y = document.getElementById("badGuys");
    y.style.display = "block";
  }

  function showDuel() {
    var duel = document.getElementById("duel");
    duel.style.display = "block";
  }

  function hideDuel() {
    var duel = document.getElementById("duel");
    duel.style.display = "none";
  }

  function createDuel() {
    $yourFighter.healthPoints = parseInt(
      $("#fighterSection .healthPoints").html()
    );
    $yourFighter.attackPoints = parseInt(
      $("#fighterSection .attackPoints").html()
    );
    theOpponent.healthPoints = parseInt(
      $("#defenderSection .healthPoints").html()
    );
    theOpponent.attackPoints = parseInt(
      $("#defenderSection .attackPoints").html()
    );
  }

  function attack(base) {
    theOpponent.healthPoints =
      theOpponent.healthPoints - $yourFighter.attackPoints;
    $yourFighter.healthPoints =
      $yourFighter.healthPoints - theOpponent.attackPoints;
    if (theOpponent.healthPoints <= 0) {
      alert("You defeated the opponent.")
      hideDuel();
      showBadGuys();
      // reset();
      wins++;
      if (wins === 5) {
        alert("You defeated all opponents. Play again?");
        reset();
      }
    }
    if ($yourFighter.healthPoints <= 0) {
      alert("Your opponent defeated you. Try Again.");
      reset();
    }
    $yourFighter.attackPoints += parseInt(base);
    writeStats();
  }

  function writeStats() {
    $("#fighterSection .healthPoints").text(
      parseInt($yourFighter.healthPoints)
    );
    $("#fighterSection .attackPoints").text(
      parseInt($yourFighter.attackPoints)
    );
    $("#defenderSection .healthPoints").text(
      parseInt(theOpponent.healthPoints)
    );
    $("#defenderSection .attackPoints").text(
      parseInt(theOpponent.attackPoints)
    );
  }

  function reset() {
    hideDuel();
    $("#goodGuys .row").append($yourFighter);
    showGoodGuys();
    hideBadGuys();
    var opponents = [];
    for (x = 0; x < 5; x++) {
      opponents[x] = $("#defenderSection .card");
      $("#badGuys .row").append(opponents[x]);
    }
    set();
  }

  // *********************************************************on click **********************************************

  $("#instructions").on("click", function togText() {
    var x = document.getElementById("instructionText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });

  $("#g1").on("click", function() {
    hideGoodGuys();
    showBadGuys();
    $yourFighter = $("#g1");
    $("#fighterSection").append($yourFighter);
    base = parseInt($("#fighterSection .attackPoints").html());
  });

  $("#g2").on("click", function() {
    hideGoodGuys();
    showBadGuys();
    $yourFighter = $("#g2");
    $("#fighterSection").append($yourFighter);
    base = parseInt($("#fighterSection .attackPoints").html());
  });

  $("#g3").on("click", function() {
    hideGoodGuys();
    showBadGuys();
    $yourFighter = $("#g3");
    $("#fighterSection").append($yourFighter);
    base = parseInt($("#fighterSection .attackPoints").html());
  });

  $("#g4").on("click", function() {
    hideGoodGuys();
    showBadGuys();
    $yourFighter = $("#g4");
    $("#fighterSection").append($yourFighter);
    base = parseInt($("#fighterSection .attackPoints").html());
  });
   
  $("#g5").on("click", function() {
    hideGoodGuys();
    showBadGuys();
    $yourFighter = $("#g5");
    $("#fighterSection").append($yourFighter);
    base = parseInt($("#fighterSection .attackPoints").html());
  });



  $("#b1").on("click", function() {
    hideBadGuys();
    $yourOpponent = $("#b1");
    $("#defenderSection").prepend($yourOpponent);
    showDuel();
    createDuel();
  });

  $("#b2").on("click", function() {
    hideBadGuys();
    $yourOpponent = $("#b2");
    $("#defenderSection").prepend($yourOpponent);
    showDuel();
    createDuel();
  });
  $("#b3").on("click", function() {
    hideBadGuys();
    $yourOpponent = $("#b3");
    $("#defenderSection").prepend($yourOpponent);
    showDuel();
    createDuel();
  });

  $("#b4").on("click", function() {
    hideBadGuys();
    $yourOpponent = $("#b4");
    $("#defenderSection").prepend($yourOpponent);
    showDuel();
    createDuel();
  });

  $("#b5").on("click", function() {
    hideBadGuys();
    $yourOpponent = $("#b5");
    $("#defenderSection").prepend($yourOpponent);
    showDuel();
    createDuel();
  });

  $(".attack-button").on("click", function() {
    attack(base);
  });
}); //end document ready

// unused

// $("#g2hp").text(setHealthPoints);
// $("#g2ap").text(setAttackPoints);
// $("#g3hp").text(setHealthPoints);
// $("#g3ap").text(setAttackPoints);
// $("#g4hp").text(setHealthPoints);
// $("#g4ap").text(setAttackPoints);

// $("#b1hp").text(setHealthPoints);
// $("#b1ap").text(setAttackPoints);
// $("#b2hp").text(setHealthPoints);
// $("#b2ap").text(setAttackPoints);
// $("#b3hp").text(setHealthPoints);
// $("#b3ap").text(setAttackPoints);
// $("#b4hp").text(setHealthPoints);
// $("#b4ap").text(setAttackPoints);
// function printFighterName(index) {
//   var cardTitles = document.getElementsByClassName("card-title");
//   console.log(cardTitles[index - 8].textContent);
// }
//   var duelFlag=0;
//   function showDuel(){
//     if(duelFlag=0)
//     {
//       $("#duel").style.display=none;
//     }
//     else
//     {
//       $("#duel").style.display=block;
//     }

//   }
// showDuel();

// $body=$("body");
//

//   var goodGuys = [
//     "Jar Jar Binks",
//     "Logray",
//     "Max Rebo",
//     "Nien Nunb"
//   ];

// var imgArray=[];
// imgArray[0] = new Image();
// imgArray[0].src = 'assets/jarjar.jpeg';
// imgArray[1] = new Image();
// imgArray[1].src = "assets/logray.jpeg";
// imgArray[2] = new Image();
// imgArray[2].src = "assets/maxrebo.jpg";
// imgArray[3] = new Image();
// imgArray[3].src = "assets/niennunb.jpeg";
//   for(x=0;x<goodGuys.length;x++)
//   {
//     var fighter = $("<button>");
//     fighter.addClass("card");
//     fighter.attr("card-title", goodGuys[x]);
//     fighter.attr("img",imgArray[x]);
//     $("goodGuys").append(fighter);
//   }
// var badGuys = ["Exogorth", "Salacious B. Crumb", "IG-88", "Ben Quadrinaros"];

// chooseGoodGuy();

// function chooseGoodGuy(){
// var cards=document.getElementsByClassName("card");
// // .textContent;
// // console.log(cards);
// // var cardImages=document.getElementsByTagName("img");
// var yourFighter={name:""};
// var tempName;
// for(i=0;i<cards.length;i++)
// {
//   $(cards[i]).on("click", function() {
//     hideGoodGuys();
//     console.log(i);
//     printFighterName(i);
//     // yourFighter.name=cardTitles[i].textContent;
//     // yourFighter=$(x[i]);
//     // console.log(cardTitles[i].textContent);
//   });
// }
// }

//   for(x=0;x<goodGuys.length;x++)
//   {
//    var character=document.getElementsByClassName.

//   }

//   for(x=0;x<badGuys.length;x++)
//   {

//   }

//   setState();
//   var state = 0;
//   function setState() {
//     if (state === 0) {
//       hideBadGuys();
//     }
//     if (state === 1) {
//       hideGoodGuys();
//     }
//   }

//   //need state variable for game

//   //Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

// increases by its base each time
// var goodGuy = { healthPoints: 0, attackPower: 0 };

//doesnt change
// var badGuy = { healthPoints: 0, attackPower: 0 };
