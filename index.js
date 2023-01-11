let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseHomeScoreByOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreByTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreByThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function increaseGuestScoreByOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreByTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreByThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function newGame() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}