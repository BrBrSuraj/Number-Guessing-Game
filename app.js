let computerGuess;
let userGuesses=[];
let gameStatus=document.getElementById('gameStatus');
let maxAttempts;
let userdata=document.getElementById('userguess')


function getGuess(){
  computerGuess = Math.floor(Math.random() * 100);
  document.getElementById('newgame').style.display="none";
  document.getElementById('newgamebtn').style.display="none";
}
getGuess();

let easybtn=document.getElementById('easybtn');
easybtn.addEventListener('click',function(){
  document.getElementById('welcomescreen').style.display = "none";
  document.getElementById('newgame').style.display = "block";
   maxAttempts=10;

})

let hardbtn = document.getElementById('hardbtn');
hardbtn.addEventListener('click', function () {
  document.getElementById('welcomescreen').style.display = "none";
  document.getElementById('newgame').style.display = "block";
  maxAttempts =5;
});


let beginNewGame = document.getElementById('newgamebtn');
beginNewGame.addEventListener('click',function(){
  window.location.reload();
})


function startNewGame(){
  userdata.setAttribute('disabled',true);
  document.getElementById('newgamebtn').style.display = "inline";

}

// main login
function compairGuess(){
  userInput = Number(document.getElementById('userguess').value);
  userGuesses=[...userGuesses,userInput];
  let attempt = userGuesses.length;
  document.getElementById('previousGuesses').innerHTML = "Number of Previous Attempts: " + attempt;
  document.getElementById('previousAttempts').innerHTML = "Number of Previous Guesses: " + "," + userGuesses;
  if (attempt < maxAttempts){
    if (computerGuess > userInput) {
      gameStatus.innerHTML = "Your Guess is Low."
      userdata.value = "";
    } else if (computerGuess < userInput) {
      gameStatus.innerHTML = "Your Guess is High."
      userdata.value = "";
    } else {
      gameStatus.innerHTML = "Your Guess is Correct."
      userdata.value = "";
      startNewGame();
    }

}else{
    if (computerGuess > userInput) {
      gameStatus.innerHTML = "You Loose, Correct Number  is " + computerGuess
      userdata.value = "";
      startNewGame();
    } else if (computerGuess < userInput) {
      gameStatus.innerHTML = "You Loose, Correct Number  is " + computerGuess
      userdata.value = "";
      startNewGame();
    } else {
      gameStatus.innerHTML = "Your Guess is Correct."
      userdata.value = "";
      startNewGame();
    }
}
  
  


};



