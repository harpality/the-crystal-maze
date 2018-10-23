var wins;
var losses;
var totalscore = 0;
var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
console.log(randomNum);


$(document).ready(function() {
    $("#random-num").text(randomNum);
});


$("#crystal-1").on("click", function() {
   totalscore += crystal1;
   $("#total-score").text(totalscore);
});

$("#crystal-2").on("click", function() {
   totalscore += crystal2;
   $("#total-score").text(totalscore);
});

$("#crystal-3").on("click", function() {
   totalscore += crystal3;
   $("#total-score").text(totalscore);
});

$("#crystal-4").on("click", function() {
   totalscore += crystal4;
   $("#total-score").text(totalscore);
});