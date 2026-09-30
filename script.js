document.querySelector(".roll").addEventListener("click", function () {
    // generates the random numbers
    var plr1 = Math.floor(Math.random() * 6) + 1;
    var plr2 = Math.floor(Math.random() * 6) + 1;

    // Player 1 dice
    document.querySelector(".img1").setAttribute("src", "./images/dice" + plr1 + ".png");

    // player 2 dice
    document.querySelector(".img2").setAttribute("src", "./images/dice" + plr2 + ".png");

    if (plr1 > plr2) {
        document.querySelector(".resultText").textContent = "← Player 1 Wins!";
    } else if (plr1 < plr2) {
        document.querySelector(".resultText").textContent = "Player 2 Wins! →";
    } else {
        document.querySelector(".resultText").textContent = "Tie!";
    }
});


