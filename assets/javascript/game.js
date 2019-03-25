// data needed to keep game count

let wins = 0;
let losses = 0;
let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;
let randomNum = 0;
let totalscore = 0;

// background music
const backgroundTune = document.getElementById('playMaze');

// function to assign random numbers to crystals
const crystalMethod = () => {
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;
};

// win and loss sounds
const winSound = () => {
  document.getElementById('audiotag1').play();
};

const lossSound = () => {
  document.getElementById('audiotag2').play();
};

// plays background music
const playBkgrd = () => {
  backgroundTune.addEventListener('click', function() {
    document.getElementById('audiotag3').muted = false;
    document.getElementById('audiotag3').play();
    document.getElementById('audiotag3').loop = true;
  });
};

// stops background music
const stopBkgrd = () => {
  document.getElementById('stopMaze').addEventListener('click', function() {
    document.getElementById('audiotag3').muted = true;
  });
};

// starts the game and selects random number
const gameStart = () => {
  randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
  $('#random-num').text(randomNum);
  totalscore = 0;
  updateScore();
  playBkgrd();
  stopBkgrd();
  crystalMethod();
};

// shows new score on the DOM
const updateScore = () => {
  $('#total-score').text(totalscore);
};

// logic for winning or losing the game
const winOrLose = () => {
  if (randomNum === totalscore) {
    wins++;
    $('#wins').text(wins);
    $('#score-board').text('YOU WIN');
    winSound();
    gameStart();
  } else if (totalscore > randomNum) {
    losses++;
    $('#losses').text(losses);
    $('#score-board').text('YOU LOSE');
    lossSound();
    gameStart();
  }
};

// start the game when document has loaded
$(document).ready(() => {
  gameStart();
});

// click methods for each crystal
$('#crystal-1').on('click', () => {
  totalscore += crystal1;
  updateScore();
  winOrLose();
});

$('#crystal-2').on('click', () => {
  totalscore += crystal2;
  updateScore();
  winOrLose();
});

$('#crystal-3').on('click', () => {
  totalscore += crystal3;
  updateScore();
  winOrLose();
});

$('#crystal-4').on('click', () => {
  totalscore += crystal4;
  updateScore();
  winOrLose();
});
