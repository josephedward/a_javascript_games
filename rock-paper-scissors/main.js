// players
var players = {
  p1: {
    key: "",
    name: "",
    wins: 0,
    losses: 0
  },
  p2: {
    key: "",
    name: "",
    wins: 0,
    losses: 0
  }
};
var user = {
  role: "",
  key: ""
};

// Turns and rounds
var turn = 0;
var round = 1;
var totalRounds = 5;

// connections
var connectionCounter;

//keys
var p1K;
var p2K;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA82VqLShil_1CwGueFBsQA-NkMebV2d0c",
  authDomain: "project1-f1737.firebaseapp.com",
  databaseURL: "https://project1-f1737.firebaseio.com",
  projectId: "project1-f1737",
  storageBucket: "project1-f1737.appspot.com",
  messagingSenderId: "370958819430"
};
firebase.initializeApp(config);
var dB = firebase.database();

// Check if there are already active players in the database
// save to global var
// render to DOM
// save connection keys
dB.ref("/players").on("value", function(snapshot) {
  if (snapshot.child("1/name").exists()) {
    players.p1.name = snapshot.child("1/name").val();
    $(".player1 h4").html(players.p1.name);
    p1K = snapshot.child("1/key").val();
  }
  if (snapshot.child("2/name").exists()) {
    players.p2.name = snapshot.child("2/name").val();
    $(".player2 h4").html(players.p2.name);
    p2K = snapshot.child("2/key").val();
    // $("#joinForm").hide();
  }
});

// This is the "conductor" for the whole game.
// Everything depends on "turn"
//state variable
//  0, no players
// 1, player one's turn
// turn = 2, player two's turn
// turn = 3, results
// show chatbox
// reset player choices
// console.log("Turn (from dB): " + turnsnap.val().turn);
// new game, not programmed yet
// enable player1 buttons
// enable player2 buttons
// update status message
// get choices from dB
// show choices made
// show winner
dB.ref("/game").on("value", function(turnsnap) {
  if (turnsnap.child("turn").exists()) {
    switch (turnsnap.val().turn) {
      case 0:
        break;
      case 1:
        $(".chatbox").slideDown();
        resetChoices();
        if (user.role === "player1") {
          status("Player 1's Turn");
          $(".player1 button").css("visibility", "visible");
          enableChoices(user.role);
          hideObj(".player2 button");
        }
        if (user.role === "player2") {
          status(players.p1.name + " is thinking...");
          hideObj(".player1 button");
        }
        break;
      case 2:
        if (user.role === "player1") {
          status(players.p2.name + " is thinking...");
        }
        if (user.role === "player2") {
          status("Your turn. Choose your weapon!");
          $(".player2 button").css("visibility", "visible");
          enableChoices(user.role);
        }
        break;
      case 3:
        status("Round complete!");

        var p1choice = turnsnap.val().p1choice.toLowerCase();
        var p2choice = turnsnap.val().p2choice.toLowerCase();

        $(".card button").css("visibility", "visible");
        $(".player1 ." + p1choice).addClass("active");
        $(".player2 ." + p2choice).addClass("active");
        
        determineWinner(p1choice, p2choice);
        break;
    }
  }
});

// chatbox action
dB.ref("/chatbox")
  .orderByChild("dateAdded")
  .limitToLast(1)
  .on("child_added", function(snapshot) {
    var output = "<div class='chat'><span class='speaker'>";
    output += snapshot.val().name;
    output += ":</span> <span class='chatContent'>";
    output += snapshot.val().message;
    output += "</span></div>";
    $(".chats").append(output);
  });

// Handling disconnects
// connectionsRef references a specific location in our dB.
// All of our connections will be stored in this directory.
var connectionsRef = dB.ref("/connections");
var connectedRef = dB.ref(".info/connected");

// When the client's connection state changes...
// console.log("Current user role: "+user.role);
// If they are connected..
// Add user to the connections list.
// set local user key to connection key
// Remove user from the connection list when they disconnect.
connectedRef.on("value", function(snap) {
  if (snap.val()) {
    var con = connectionsRef.push(true);
    user.key = con.key;
    con.onDisconnect().remove();
  }
});

// Display the viewer count in the html.
// The number of online users is the number of children in the connections list.
connectionsRef.on("value", function(snap) {
  $("#watchers").html(snap.numChildren());
  // $("#watchers").html().append.;
});

// if the key of removed child matches one of the players, remove them
// clear on dB
// clear locally so new player can be added

connectionsRef.on("child_removed", function(removed) {
  if (removed.key === p1K) {
    status(players.p1.name + " disconnected!");
    dB.ref("/players/1").remove();
    players.p1.name = "";
    if (user.role !== "player2") {
      $("#joinForm").show();
    }
    user.role = "";
    resetRound();
  } else if (removed.key === p2K) {
    status(players.p2.name + " disconnected!");
    dB.ref("/players/2").remove();
    players.p2.name = "";
    if (user.role !== "player1") {
      $("#joinForm").show();
    }
    user.role = "";
    resetRound();
  }
});

function hideObj(div) {
  $(div).css("visibility", "hidden");
}

// Disable player choices
function disableChoices(player) {
  $(player).prop("disabled", true);
  $(player)
    .siblings()
    .prop("disabled", true);
}
// Enable player choices
function enableChoices(player) {
  $("." + player + " button").prop("disabled", false);
}
// Update status message
function status(msg) {
  $(".status").html(msg);
}
// Clear results panel
function clearResults() {
  $(".result .card-text").html("");
}
// Who won the round?
function determineWinner(a, b) {
  if (a === b) {
    $(".result .card-text").html("It's a tie!");
  } else if (a === "rock" && b === "paper") {
    $(".result .card-text").html(players.p2.name + " wins!");
    players.p1.losses++;
    players.p2.wins++;
  } else if (a === "rock" && b === "scissors") {
    $(".result .card-text").html(players.p1.name + " wins!");
    players.p1.wins++;
    players.p2.losses++;
  } else if (a === "paper" && b === "rock") {
    $(".result .card-text").html(players.p1.name + " wins!");
    players.p1.wins++;
    players.p2.losses++;
  } else if (a === "paper" && b === "scissors") {
    $(".result .card-text").html(players.p2.name + " wins!");
    players.p1.losses++;
    players.p2.wins++;
  } else if (a === "scissors" && b === "rock") {
    $(".result .card-text").html(players.p2.name + " wins!");
    players.p1.losses++;
    players.p2.wins++;
  } else if (a === "scissors" && b === "paper") {
    $(".result .card-text").html(players.p1.name + " wins!");
    players.p1.wins++;
    players.p2.losses++;
  }
  $("#scorePlayer1").html(
    "Wins: " + players.p1.wins + " / Losses: " + players.p1.losses
  );
  $("#scorePlayer2").html(
    "Wins: " + players.p2.wins + " / Losses: " + players.p2.losses
  );
  dB.ref("/players/1").update({
    wins: players.p1.wins,
    losses: players.p1.losses
  });
  dB.ref("/players/2").update({
    wins: players.p2.wins,
    losses: players.p2.losses
  });
  // after 3 seconds, reset the round
  setTimeout(resetRound, 3000);
}
// Reset the round (not the entire game)
function resetRound() {
  turn = 1;
  dB.ref("/game").update({
    turn: turn,
    p1choice: "",
    p2choice: ""
  });
  resetChoices();
  clearResults();
}
// Reset choice buttons to initial states
function resetChoices() {
  $(".card button").removeClass("active");
}

