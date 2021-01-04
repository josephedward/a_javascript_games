$(document).ready(function(){
    var config = {

        apiKey: "AIzaSyDDWOsqd0ThlLVMc9AxaMvSgpn6TdvT16U",
        authDomain: "train-scheduler-300e7.firebaseapp.com",
        databaseURL: "https://train-scheduler-300e7.firebaseio.com",
        projectId: "train-scheduler-300e7",
        storageBucket: "train-scheduler-300e7.appspot.com",
        messagingSenderId: "951815167196"
    
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var trainName;
    var destination;
    var firstTrain;
    var freq = 0;

    $("#add-train").on("click", function() {
        event.preventDefault();
        trainName = $("#trainName").val().trim();
        destination = $("#destination").val().trim();
        firstTrain = $("#first-train").val().trim();
        freq = $("#frequency").val().trim();

        database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            freq: freq,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        $("form")[0].reset();
    });

//need to add remove functions for each train
//edit info in rows
//authentication? 

    database.ref().on("child_added", function(childSnap) {
        var minAway;
        var firstTrainNew = moment(childSnap.val().firstTrain, "hh:mm").subtract(1, "years");
        var timeDifference = moment().diff(moment(firstTrainNew), "minutes");
        var remainder = timeDifference % childSnap.val().freq;
        var minAway = childSnap.val().freq - remainder;
        var nextTrain = moment().add(minAway, "minutes");
        nextTrain = moment(nextTrain).format("hh:mm");

        $("#add-row").append("<tr><td>" + childSnap.val().trainName +
                "</td><td>" + childSnap.val().destination +
                "</td><td>" + childSnap.val().freq +
                "</td><td>" + nextTrain + 
                "</td><td>" + minAway + "</td></tr>");

        }, function(error) {
            console.log("Errors: " + error.code);
    });



    $("#reset").on("click", function(){

        database.ref('/').set("reset.json");
        location.reload();

    });
});

//******************************************************************** */

    // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    //     $("#name-display").html(snapshot.val().name);
    //     $("#email-display").html(snapshot.val().email);
    //     $("#age-display").html(snapshot.val().age);
    //     $("#comment-display").html(snapshot.val().comment);
    // });