var wins = 0;
var losses = 0;
var totalscore = 0;

var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;


function crystalMethod() {
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
}

function winSound() {
    document.getElementById('audiotag1').play();
}

function gameStart() {
    randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#random-num").text(randomNum);
    totalscore = 0;
    $("#total-score").text(totalscore);
    crystalMethod();   
}

function winOrLose() {
    if (randomNum === totalscore) {
        wins++;
        console.log(wins);  
        $("#wins").text(wins);
        $("#score-board").text("YOU WIN");
        winSound();
        gameStart();

    } else if (totalscore > randomNum) {
        losses++;
        console.log(losses);
        $("#losses").text(losses);
        $("#score-board").text("YOU LOSE");
        gameStart();
    }
}

$(document).ready(function() {
    gameStart();
});


$("#crystal-1").on("click", function() {
   totalscore += crystal1;
   $("#total-score").text(totalscore);
   winOrLose();
});

$("#crystal-2").on("click", function() {
   totalscore += crystal2;
   $("#total-score").text(totalscore);
   winOrLose();
});

$("#crystal-3").on("click", function() {
   totalscore += crystal3;
   $("#total-score").text(totalscore);
   winOrLose();
});

$("#crystal-4").on("click", function() {
   totalscore += crystal4;
   $("#total-score").text(totalscore);
   winOrLose();
});

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(randomNum);