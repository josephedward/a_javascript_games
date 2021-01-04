$(document).ready(function() {
  // Player registration
  $("#joinForm").submit(function(event) {
    // don't refresh page on submit
    event.preventDefault();
    if (players.p1.name === "") {
      players.p1.name = $("#nameInput")
        .val()
        .trim();
      // set user global variable to player 1
      user.role = "player1";

      // write name to DOM
      $(".player1 h4").html(players.p1.name);
      status(
        "Hi, " +
          players.p1.name +
          "! You're player 1. Waiting for another player to join."
      );
      // write player name to dB
      dB.ref("/players/1").update({
        key: user.key,
        name: players.p1.name,
        wins: players.p1.wins,
        losses: players.p1.losses
      });
      //
      turn = 0;
      dB.ref("/game").update({
        turn: turn
      });

      $(this).show();
    } else if (players.p2.name === "") {
      players.p2.name = $("#nameInput")
        .val()
        .trim();
      // set user global variable to player 2
      user.role = "player2";
      // write name to DOM
      $(".player2 h4").html(players.p2.name);
      // write player name to dB
      dB.ref("/players/2").update({
        key: user.key,
        name: players.p2.name,
        wins: players.p2.wins,
        losses: players.p2.losses
      });
      status(
        "Hey, " +
          players.p2.name +
          "! You're player 2. Waiting for " +
          players.p1.name +
          " to make a move."
      );
      // start game by storing turn in database
      turn = 1;
      dB.ref("/game").update({
        turn: turn
      });
    }
    // console.log(user.role);
  });

  // Player option choice
  // set turn to 2 for player 2
  // store values in dB
  // set turn to 3 for results
  // store values in dB
  $(".player button").click(function() {
    $(this).addClass("active");
    var choice = $(this).text();
    var parent = $(this)
      .parent()
      .parent();
    disableChoices(this);
    if (parent.hasClass("player1")) {
      turn = 2;

      dB.ref("/game").update({
        p1choice: choice,
        turn: turn
      });
      status("Your choice is locked in. Waiting on " + players.p2.name + "...");
    } else {
      turn = 3;
      dB.ref("/game").update({
        p2choice: choice,
        turn: turn
      });
    }
  });

  $("#clearButton").click(function() {
    $("body").css("all", "unset");
    resetRound();
    resetChoices();

    dB.ref("/players/1").remove();
    dB.ref("/players/2").remove();
    dB.ref("/game").remove();
    dB.ref("/connections").remove();
    // dB.ref(".info/connected").remove();
    dB.ref("/chatbox").remove();
    location.reload();
  });

  $("#chatForm").submit(function(event) {
    event.preventDefault();
    var message = $("#chatMessage")
      .val()
      .trim();
    // clear input
    $("#chatMessage").val("");
    var chatUser;
    if (user.role === "player1") {
      chatUser = players.p1.name;
    } else if (user.role === "player2") {
      chatUser = players.p2.name;
    }
    dB.ref("/chatbox").push({
      name: chatUser,
      message: message
    });
  });
}); 
