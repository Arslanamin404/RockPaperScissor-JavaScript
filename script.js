/* Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

//RPS => rock, paper, scissors
const totalScore = {computerScore : 0, playerScore: 0}

//getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string 
function getComputerChoice() {
    const rpsChoice = ['Rock','Paper','Scissors']
    const randomNumber = Math.floor(Math.random() * rpsChoice.length)
    const computerChoice = rpsChoice[randomNumber] 
    return computerChoice
}
getComputerChoice()

// getResult compares playerChoice & computerChoice and returns the score accordingly 

function getResult(playerChoice, computerChoice) {
    let score;
    if(playerChoice==computerChoice){
        score = 0
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1 
    } 
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score = 1
    } 
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1
    }
    else{
        score = -1
    }

    return score

}
getResult()


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result')
    const playerScoreDiv = document.getElementById('player-score')
    const handsDiv = document.getElementById('hands')
    if(score < 0){
       resultDiv.innerText = 'You Lose! Better luck next time'
    }
    else if(score == 0){
        resultDiv.innerText = 'Match Tied'
    }
    else {
        resultDiv.innerText = 'Congratulation..! You Won🎇🎉🎊'
    }
    handsDiv.innerText = `🙋🏻‍♂️${playerChoice} vs 🤖${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore["playerScore"]}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice() 
    const score = getResult(playerChoice,computerChoice)
    totalScore['playerScore']+=score
   
    showResult(score,playerChoice,computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton') 
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => {
            onClickRPS(rpsButton.value)
        }
    })
    
    // Add a click listener to the end game button that runs the endGame() function on click
    const endGameBtn = document.getElementById('endGameButton')
    endGameBtn.onclick = () => {
        endGame(totalScore)
    }
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    const resultDiv = document.getElementById('result')
    const playerScoreDiv = document.getElementById('player-score')
    const handsDiv = document.getElementById('hands')
    resultDiv.innerText = ''
    playerScoreDiv.innerText = ''
    handsDiv.innerText = ''
}

playGame()