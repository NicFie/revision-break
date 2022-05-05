let computerSelection = "";
let userSelection = "";
let userTotal = 0;
let computerTotal = 0;
const instructions = document.querySelector('#instructions');
const userChoice = document.querySelector('#user-choice');
const userImage = document.querySelector('#user-image');
const computerChoice = document.querySelector('#computer-choice')
const computerImage = document.querySelector('#computer-image');
const emoji = document.querySelector('.emoji');
const results = document.querySelector('#results');
const userRunningTotal = document.querySelector('#user-running-total');
const computerRunningTotal = document.querySelector('#computer-running-total');
const runningTotals = document.querySelector('.running-totals');
const finalResult = document.querySelector('#final-result');
const nextRoundButton = document.querySelector('#next-round');
const playAgainButton = document.querySelector('#play-again')
const weapons = document.querySelector('#weapons');
const choices = document.querySelector('.choices');
const computerChoiceContainer = document.querySelector('#computer-choice-container');

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelection = 'rock';
        computerImage.innerHTML = '<span>✊</span>';
        computerImage.style.visibility = 'visible';
        computerChoiceContainer.style.visibility = "visible";
    } else if (randomNumber === 1) {
        computerSelection = 'paper';
        computerImage.innerHTML = '<span>✋</span>';
        computerImage.style.visibility = 'visible';
        computerChoiceContainer.style.visibility = "visible";
    } else {
        computerSelection = 'scissors';
        computerImage.innerHTML = '<span>✌️</span>';
        computerImage.style.visibility = 'visible';
        computerChoiceContainer.style.visibility = "visible";
    }
    return computerSelection;
}


function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        results.textContent = 'It\'s a tie. Play again';
    } 
      
      else if (computerSelection === 'rock') {
        if (userSelection === 'paper') {
            results.textContent = 'Paper beats rock. You get one point';
            return userTotal += 1;
        } else {
            results.textContent = 'Rock beats scissors. The computer gets one point';
            return computerTotal += 1;
        };
    }
     

      else if (computerSelection === 'paper') {
        if (userSelection === 'rock') {
            results.textContent = 'Paper beats rock. The computer gets one point';
            return computerTotal += 1;
        } else {
            results.textContent = 'Scissors beats paper. You get one point';
            return userTotal += 1;
        }
    } 
      
      else if (computerSelection === 'scissors') {
        if (userSelection === 'rock') {
            results.textContent = 'Rock beats scissors. You get one point';
            return userTotal += 1;
        } else {
            results.textContent = 'Scissors beats paper. The computer gets one point';
            return computerTotal += 1;
        }
    } 
}

function game() {
    computerChoice.textContent = `The computer has chosen ${computerSelection}`;
    userRunningTotal.textContent = `You: ${userTotal} points.`;
    computerRunningTotal.textContent =  `Computer: ${computerTotal} points.`;
        if (userTotal == 3) {
           finalResult.textContent = '🎉 You win the game! 🎉';
           playAgainButton.style.display = "block";
           weapons.style.display = "none";
           nextRoundButton.style.display = "none";
        } else if (computerTotal == 3) {
           finalResult.textContent = '😭 The computer wins the game! 😭'
           playAgainButton.style.display = "block";
           weapons.style.display = "none";
           nextRoundButton.style.display = "none";
        } else {
           finalResult.textContent = '';
        }
}





document.getElementById("rock").addEventListener("click", function(){
        userChoice.textContent = "You have chosen rock";        
        userImage.innerHTML = "<span>✊</span>";
        nextRoundButton.style.display = "block";
        instructions.style.visibility = "hidden";
        computerPlay();
        playRound('rock', computerSelection);
        game();
        weapons.style.display = "none";
        emoji.style.visibility = "visible";
        choices.style.visibility = "visible";
        runningTotals.style.visibility = "visible";
        

    })
document.getElementById("paper").addEventListener("click", function(){
        userChoice.textContent = "You have chosen paper";        
        userImage.innerHTML = '<span>✋</span>';
        nextRoundButton.style.display = "block";
        instructions.style.visibility = "hidden";
        computerPlay();
        playRound('paper', computerSelection);
        game();
        weapons.style.display = "none";
        emoji.style.visibility = "visible";
        choices.style.visibility = "visible";
        runningTotals.style.visibility = "visible";
        
        
    })
document.getElementById("scissors").addEventListener("click", function(){
        userChoice.textContent = "You have chosen scissors";
        userImage.innerHTML = '<span>✌️</span>'
        nextRoundButton.style.display = "block";
        instructions.style.visibility = "hidden";
        computerPlay();
        playRound('scissors', computerSelection);
        game();
        weapons.style.display = "none";
        emoji.style.visibility = "visible";
        choices.style.visibility = "visible";
        runningTotals.style.visibility = "visible";
        
    })
          

function nextRound() {
    weapons.style.display = "flex";
    nextRoundButton.style.display = "none";
    computerChoice.textContent = "";
    results.textContent = "";
    userChoice.textContent = "";
    userImage.textContent = "";
    computerImage.textContent = "";
    computerImage.style.visibility = "hidden";
    emoji.style.visibility = "hidden";
    choices.style.visibility = "hidden";
    computerChoiceContainer.style.visibility = "hidden";
}

/* Option to restart match. */
function playAgain() {
   userTotal = 0;
   computerTotal = 0;
   userRunningTotal.textContent ="";
   computerRunningTotal.textContent = "";
   finalResult.textContent = "";
   userChoice.textContent = "";
   userImage.textContent = "";
   computerChoice.textContent = "";
   computerImage.textContent = "";
   results.textContent = "";
   playAgainButton.style.display = "none";
   weapons.style.display = "flex";
   instructions.style.visibility = "visible";
   computerImage.style.visibility = "hidden";
   emoji.style.visibility = "hidden";
   choices.style.visibility = "hidden";
   computerChoiceContainer.style.visibility = "hidden";
   runningTotals.style.visibility = "hidden";
}
