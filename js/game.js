var windowX = window.innerWidth - 115;
var windowY = window.innerHeight - 115;
var timer = 5;
var posX;
var posY;
var score = 0;
var end = 20;
var numberProgress = 0;

var timerStart = setInterval(timerCount,1000);
var timerEndGame;

function timerCount(){
    timer--;
    document.getElementById('timer').innerHTML = timer;
    if(timer == 0){
        document.getElementById('timerContainer').style.display = "none";
        clearInterval(timerStart);
        initializeGame();
    }
}

function initializeGame(){
    document.getElementById('bug').style.display = "initial";
    document.getElementById('bug').style.marginTop = Math.floor(Math.random() * windowY) - 115 + "px";
    document.getElementById('bug').style.marginLeft = Math.floor(Math.random() * windowX) - 115 + "px";
    timerEndGame = setInterval(endGame,1000);
}

function killBug(){
    score++;
    document.getElementById('score').innerHTML = "Score: " + score;
    posY = Math.floor(Math.random() * windowY) + 10;
    posY = posY < 0 ? 0 :posY;
    posX = Math.floor(Math.random() * windowX) + 10;
    posX = posX < 0 ? 0 :posX;
    document.getElementById('bug').style.marginTop = posY + "px";
    document.getElementById('bug').style.marginLeft = posX + "px";
}

function endGame(){
    if(end == 0){
        document.getElementById('bug').style.display = "none";
        document.getElementById('timerContainer').style.display = "flex";
        document.getElementById('timer').style.display = "initial";
        document.getElementById('score').style.display = "none";
        document.getElementById('timerBar').style.display = "none";
        document.getElementById('numberProgress').style.display = "none";
        document.getElementById('timerProgress').style.display = "none";
        document.getElementById('timer').innerHTML = "<p style='font-size: 100px; text-align: center;'>End of the Game</p><p style='font-size: 50px; text-align: center;'>Final Score: " + score + "</p><p style='font-size: 30px; text-align: center; color: blue; text-decoration: underline; cursor: pointer;'><a href='index.html'>Return to the Lobby</a></p>";
        clearInterval(timerEndGame);
    }else{
        end--;
        numberProgress += 5;
        document.getElementById('timerProgress').style.width = numberProgress + "%";
        document.getElementById('numberProgress').innerHTML = end;
    }
}