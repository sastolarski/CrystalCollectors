// crystal game pseudo-code
//     generate a random number that is the target
//     display this number
//         maybe between 19-120
//     generate 4 random numbers and assign each one to button
//     do not display these numbers
//         between 1-12
//     when you click a button the value is added to a running total on the screen
//     if the running total passes the target you lose
//         all new randoms numbers are set, running total clears

//     if you match the target, you win
//         all new random numbers, running total clears


var randNum;
var crystal1num;
var crystal2num;
var crystal3num;
var crystal4num;
var playerTotal = 0;
var wins = 0;
var losses = 0;

$(document).ready(function(){

//generate all numbers

function numberGen() {

    randNum = Math.floor(Math.random() * 100) + 19;
        console.log(randNum);

    crystal1num = Math.floor(Math.random() * 12) + 1;

    crystal2num = Math.floor(Math.random() * 12) + 1;

    crystal3num = Math.floor(Math.random() * 12) + 1;

    crystal4num = Math.floor(Math.random() * 12) + 1;

    $("#playerTotal").text(playerTotal);
    $("#randomNum").text(randNum);
};

numberGen();

function winLose() {
    if (playerTotal === randNum) {
        alert("You Won!")
        playerTotal = 0;
        numberGen();

    } else if (playerTotal > randNum) {

        alert("You Lose!")
        playerTotal = 0;
        numberGen();
    }
};

//assign numbers to images

$("#crystal1").on("click", function() {
    playerTotal += crystal1num;
    $("#playerTotal").text(playerTotal);
    winLose();
});

$("#crystal2").on("click", function() {
    playerTotal += crystal2num;
    $("#playerTotal").text(playerTotal);
    winLose();
});

$("#crystal3").on("click", function() {
    playerTotal += crystal3num;
    $("#playerTotal").text(playerTotal);
    winLose();
});

$("#crystal4").on("click", function() {
    playerTotal += crystal4num;
    $("#playerTotal").text(playerTotal);
    winLose();
});









});  //document ready ending

