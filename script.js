function getComputerChoice() {
    let random = Math.random() * 2;
    random = Math.round(random);
    const choices = ["rock", "paper", "scissorcs"];
    const computerSelection = choices[random];
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, Scissors?");
    playerSelection = playerSelection.toLowerCase(); 
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection)
    {
        return "tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "scissors" && computerSelection == "rock") || 
        (playerSelection == "paper" && computerSelection == "scissors")
        ) 
    {
        return "lose";
    } 
    else
    {
        return "victory";
    }  
}

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
