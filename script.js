'use strict';

let diceResult = 0;
let newGameBtn = document.querySelector(".btn--new");
let rollBtn = document.querySelector(".btn--roll");
let holdBtn = document.querySelector(".btn--hold");
let dice = document.querySelector(".dice");
let player = document.querySelector(".player");
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let activePlayer = document.querySelector(".player--active");
let firstPlayerScore = document.querySelector("#score--0");
let secondPlayerScore = document.querySelector("#score--1");
let firstPlayerWin = document.querySelector(".player-one-winner");
let secondPlayerWin = document.querySelector(".player-two-winner");


rollBtn.addEventListener("click", function () {
    diceResult = Math.trunc(Math.random() * 6) + 1;
    dice.setAttribute("src", `dice-${diceResult}.png`)
    if (diceResult !== 1) {
        if (player1.classList.contains("player--active")) {
            player1.children[3].children[1].textContent = Number(player1.children[3].children[1].textContent) + diceResult;
        } else if (player2.classList.contains("player--active")) {
            player2.children[3].children[1].textContent = Number(player2.children[3].children[1].textContent) + diceResult;
        }
    } else {
        if (player1.classList.contains("player--active")) {
            player1.classList.remove("player--active");
            player2.classList.add("player--active");
            player1.children[3].children[1].textContent = 0;
        } else if (player2.classList.contains("player--active")) {
            player2.classList.remove("player--active");
            player1.classList.add("player--active");
            player2.children[3].children[1].textContent = 0;
        }
    }

})
newGameBtn.addEventListener("click",function () {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    player2.children[3].children[1].textContent = 0;
    player1.children[3].children[1].textContent = 0;
    firstPlayerScore.textContent=0;
    secondPlayerScore.textContent=0;
    rollBtn.classList.remove("hidden");
    holdBtn.classList.remove("hidden");
})
holdBtn.addEventListener("click", function () {
    if (player1.classList.contains("player--active")) {
        firstPlayerScore.textContent = parseInt(firstPlayerScore.textContent) + parseInt(player1.children[3].children[1].textContent);        
        player1.children[3].children[1].textContent = 0;
        player1.classList.remove("player--active");
        player2.classList.add("player--active");        
    } else if (player2.classList.contains("player--active")) {
        secondPlayerScore.textContent = parseInt(secondPlayerScore.textContent) + parseInt(player2.children[3].children[1].textContent);
        player2.children[3].children[1].textContent = 0;
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
    }
    if(firstPlayerScore.textContent>99){
        firstPlayerWin.classList.remove("hidden");
        player1.classList.add("player--active");
        player2.classList.remove("player--active");
        rollBtn.classList.add("hidden");
        holdBtn.classList.add("hidden");
    }
    if(secondPlayerScore.textContent>99){
        secondPlayerWin.classList.remove("hidden")
        player2.classList.add("player--active");
        player1.classList.remove("player--active");
        rollBtn.classList.add("hidden");
        holdBtn.classList.add("hidden");
    }
})


