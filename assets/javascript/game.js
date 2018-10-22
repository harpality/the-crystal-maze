var randomCrystal = Math.floor(Math.random() * 12) + 1;
console.log(randomCrystal);

var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
console.log(randomNum);


$(document).ready(function() {
    $("#random-num").text(randomNum);
});