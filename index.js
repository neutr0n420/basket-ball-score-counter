let countHomeScore = 0;
let countGuestScore = 0;
let displayScoreHome = document.getElementById("homeScore");
let displayScoreGuest = document.getElementById("guestScore");
function plus1Home() {
  countHomeScore += 1;
  displayScoreHome.innerText = countHomeScore;
}
function plus2Home() {
  countHomeScore += 2;
  displayScoreHome.innerText = countHomeScore;
}
function plus3Home() {
  countHomeScore += 3;
  displayScoreHome.innerText = countHomeScore;
}

function plus1Guest() {
  countGuestScore += 1;
  displayScoreGuest.innerText = countGuestScore;
}

function plus2Guest() {
  countGuestScore += 2;
  displayScoreGuest.innerText = countGuestScore;
}
function plus3Guest() {
  countGuestScore += 3;
  displayScoreGuest.innerText = countGuestScore;
}
function resetHome() {
  countHomeScore = 0;
  displayScoreHome.innerText = 0;
}
function resetGuest() {
  countGuestScore = 0;
  displayScoreGuest.innerText = 0;
}
