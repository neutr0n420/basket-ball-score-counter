let countHomeScore = 0
let count = 0
let displayScoreHome = document.getElementById("homeScore")
let displayScoreGuest = document.getElementById("guestScore")
function plus1Home(){
    countHomeScore += 1
    displayScoreHome.innerText = countHomeScore
}
function plus2Home(){
    countHomeScore += 2
    displayScoreHome.innerText = countHomeScore
}
function plus3Home(){
    countHomeScore+=3
    displayScoreHome.innerText = countHomeScore
}

function plus1Guest(){
    count += 1
    displayScoreGuest.innerText = count
}

function plus2Guest(){
    count += 2
    displayScoreGuest.innerText = count
}
function plus3Guest(){
    count += 3
    displayScoreGuest.innerText = count
}