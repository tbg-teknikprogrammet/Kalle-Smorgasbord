const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");
const p1Button = document.getElementById("player 1");
const p2Button = document.getElementById("player 2");
const round = document.getElementById("round");
const WinRate = document.getElementById("WinRate");
const resetAll = document.getElementsByTagName("button")[2];
let gameOver = false;
let p1ScoreCount = 0;
let p2ScoreCount = 0;

p1Button.addEventListener("click", () => {
  p1ScoreCount++;
  p1Score.textContent = p1ScoreCount;
  if (p1ScoreCount == round.value) {
    alert("Player 1 Won the game!");
    p1Score.className += " red";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

p2Button.addEventListener("click", () => {
  p2ScoreCount++;
  p2Score.textContent = p2ScoreCount;
  if (p2ScoreCount == round.value) {
    alert("Player 2 won the game!");
    p2Score.className += " red";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

round.addEventListener("click", () => {
    WinRate.textContent = round.value;
});

resetAll.addEventListener("click", function() {
  reset();
});

function reset() {
  gameOver = false;
  p1ScoreCount = 0;
  p2ScoreCount = 0;
  p1Score.innerHTML = 0;
  p2Score.innerHTML = 0;
  round.value = 3;
  p1Score.classList.remove("red");
  p2Score.classList.remove("red");
  p1Button.disabled = false;
  p2Button.disabled = false;
}