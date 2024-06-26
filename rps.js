const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);

const score = document.createElement("div");
score.classList.add("score");
container.appendChild(score);

let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let choice = prompt("Pick one: Rock, Paper, or Scissors");
    let str = choice.toLowerCase();
    if(str == "rock" || str == "paper" || str == "scissors"){
        flag = 1;
        str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
        return str;
    }
    else{
        return "unknown";
    }
}

function getComputerChoice(){
    let x = Math.floor(Math.random() * 11); //returns a random integer from 0-10
    if (x <= 3){
        return "Rock";
    }
    if (x >= 4 && x <= 7){
        return "Paper";
    }
    return "Scissors";
}

function playRound(humanChoice, computerChoice){
    //when human wins
    if (humanChoice == "Rock" && computerChoice == "Scissors"){
        humanScore++;
    }
    if (humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore++;
    }
    if (humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore++;
    }
    //when computer wins
    if (computerChoice == "Rock" && humanChoice == "Scissors"){
        computerScore++;
    }
    if (computerChoice == "Paper" && humanChoice == "Rock"){
        computerScore++;
    }
    if (computerChoice == "Scissors" && humanChoice == "Paper"){
        computerScore++;
    }
    //when no one wins
    if (computerChoice == "Rock" && humanChoice == "Rock"){
        computerScore += 0;
        humanScore += 0;
    }
    if (computerChoice == "Paper" && humanChoice == "Paper"){
        computerScore += 0;
        humanScore += 0;
    }
    if (computerChoice == "Scissors" && humanChoice == "Scissors"){
        computerScore += 0;
        humanScore += 0;
    }
}

function playGame(){
    const rock = document.getElementById("Rock");
    rock.addEventListener("click", function(){
        const computerSelection = getComputerChoice();
        playRound("Rock", computerSelection);
        content.textContent = "You played: Rock --- Computer played: " + computerSelection;
        if(checkScore() == true){
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
            return;
        };
        return;
    });

    const paper = document.getElementById("Paper");
    paper.addEventListener("click", function(){
        const computerSelection = getComputerChoice();
        playRound("Paper", computerSelection);
        content.textContent = "You played: Paper --- Computer played: " + computerSelection;
        if(checkScore() == true){
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
            return;
        };
        return;
    });

    const scissors = document.getElementById("Scissors");
    scissors.addEventListener("click", function(){
        const computerSelection = getComputerChoice();
        playRound("Scissors", computerSelection);
        content.textContent = "You played: Scissors --- Computer played: " + computerSelection;
        if(checkScore() == true){
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
            return;
        };
        return;
    });
    return;
}

function checkScore(){
    if(humanScore == 5 || computerScore == 5){
        if (humanScore > computerScore){
            content.textContent = "Congrats! You won!";
        }else{
            content.textContent = "You lost! Better luck next time!";
        }
        score.textContent = "Final score: You: " + humanScore + " - Computer: " + computerScore;
        return true;
    }else{
        score.textContent = "You: " + humanScore + " - Computer: " + computerScore;
        return false;
    }
}

playGame();