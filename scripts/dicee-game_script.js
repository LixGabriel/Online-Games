
var playButton = document.getElementById("play-dice");

playButton.addEventListener('click', rollDices)


function rollDices() {

    var audio = new Audio('../sounds/dicee-game_sounds/dice-sound.mp3');
    audio.play();

    var randomNumber1 = Math.floor((Math.random() * 6)+1);
    var img1 = document.getElementsByClassName("dice-img-1")[0];
    var player1 = document.getElementsByClassName("dice-player1")[0];

    var randomNumber2 = Math.floor((Math.random() * 6)+1);
    var img2 = document.getElementsByClassName("dice-img-2")[0];
    var player2 = document.getElementsByClassName("dice-player2")[0];

    var winnerTitle = document.querySelector("h1");


    // Dice 1

    if (randomNumber1 == 1) {
        img1.src = "../images/dicee-game_images/dice1.png";
    } else if (randomNumber1 == 2) {
        img1.src = "../images/dicee-game_images/dice2.png";
    } else if (randomNumber1 == 3) {
        img1.src = "../images/dicee-game_images/dice3.png";
    } else if (randomNumber1 == 4) {
        img1.src = "../images/dicee-game_images/dice4.png";
    } else if (randomNumber1 == 5) {
        img1.src = "../images/dicee-game_images/dice5.png";
    } else if (randomNumber1 == 6) {
        img1.src = "../images/dicee-game_images/dice6.png";
    }


    // Dice 2

    if (randomNumber2 == 1) {
        img2.src = "../images/dicee-game_images/dice1.png";
    } else if (randomNumber2 == 2) {
        img2.src = "../images/dicee-game_images/dice2.png";
    } else if (randomNumber2 == 3) {
        img2.src = "../images/dicee-game_images/dice3.png";
    } else if (randomNumber2 == 4) {
        img2.src = "../images/dicee-game_images/dice4.png";
    } else if (randomNumber2 == 5) {
        img2.src = "../images/dicee-game_images/dice5.png";
    } else if (randomNumber2 == 6) {
        img2.src = "../images/dicee-game_images/dice6.png";
    }


    // Winner

    if (randomNumber1 > randomNumber2) {
        winnerTitle.innerHTML = "🏆&nbsp Player 1 Wins!";
        player1.innerHTML = "Player 1 &nbsp😁"
        player2.innerHTML = "Player 2 &nbsp😠"
    } else if (randomNumber1 < randomNumber2) {
        winnerTitle.innerHTML = "Player 2 Wins! &nbsp🏆";
        player2.innerHTML = "Player 2 &nbsp😁"
        player1.innerHTML = "Player 1 &nbsp😠"
    } else if (randomNumber1 === randomNumber2) {
        winnerTitle.innerHTML = "🏳️&nbsp Draw! &nbsp🏳️";
        player1.innerHTML = "Player 1 &nbsp😐"
        player2.innerHTML = "Player 2 &nbsp😐"
    }
}
