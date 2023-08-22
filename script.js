
const bod = document.body;
const buttons = document.createElement('div');
buttons.classList.add('buttons');
bod.appendChild(buttons);

function createButton (id) {
    const but = document.createElement('button');
    but.classList.add('but');
    but.textContent = id;
    but.id = id;
    buttons.appendChild(but);    
}

createButton ("rock");
createButton ("paper");
createButton ("scissors");

// I want to add a score -> how many wins does computer/human have
// And I want to add "state a winner after 5 games"

let humanWins = 0;
let computerWins = 0;

const content = document.createElement('div');
content.classList.add('content');
bod.appendChild(content);

// Here we can later add the amount of wins the computer got
const computer = document.createElement('p');
computer.classList.add('computer');
computer.textContent = `Computer Wins: ${computerWins}`;
content.appendChild(computer);

// same but for the human
const human = document.createElement('p');
human.classList.add('human');
human.textContent = `Human Wins: ${humanWins}`;
content.appendChild(human);

// Click to play a round against the computer
const btn = document.querySelectorAll('.but');
btn.forEach(btn => btn.addEventListener('click', () => {
    playRound(btn.id, getComputerChoice());
    if(humanWins == 5)
    {
        content.removeChild(computer);
        human.textContent = "Human Won!";
        bod.removeChild(buttons);
        return;
    }
    else if(computerWins == 5)
    {
        content.removeChild(human);
        computer.textContent = "Computer Won!";
        bod.removeChild(buttons);
        return;
    }
}))


function getComputerChoice() {
    let random = Math.random() * 2;
    random = Math.round(random);
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[random];
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, Scissors?");
    playerSelection = playerSelection.toLowerCase(); 
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    
    // log to see the buttons working
    console.log(computerSelection);
    console.log(playerSelection);

    if(playerSelection === computerSelection)
    {
        // console logs can be changed to add the value to see who won
        return "tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "scissors" && computerSelection == "rock") || 
        (playerSelection == "paper" && computerSelection == "scissors")
        ) 
    {
        // here aswell
        computerWins += 1;
        computer.textContent = `Computer Wins: ${computerWins}`;
        return "lose";
    } 
    else
    {
        // and here too
        humanWins += 1;
        human.textContent = `Human Wins: ${humanWins}`;
        return "victory";
    }  
}

/* deactivated function because of step 1 in assignment
function game() {

    let playerWins = 0;
    let computerWins = 0;
    
    for(let i = 0; i < 5; i++) {
        let round = playRound(getPlayerChoice(), getComputerChoice());
        if(round == "victory")
        {
            playerWins++;
        }
        else if(round == "lose")
        {
            computerWins++;
        }
        else
        {
            continue;
        }
    }

    if(playerWins > computerWins)
    {
        console.log("You won!");
    }
    else
    {
        console.log("You lost!");
    }

}

game();

*/


