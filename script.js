
playGame();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = choices[Math.floor(Math.random() * 3)];
    return random;
}

function getHumanChoice() {
    let choice = "None";
    while(choice == "None") {
        choice = prompt("Please enter rock, paper or scissors", "None");
        if (choice == "Rock" || "rock") {
            return "Rock";
        }
        else if (choice == "Paper" || "paper") {
            return "Paper";
        }
        else if (choice == "Scissors" || choice == "scissors") {
            return "Scissors";
        }
        else {
            console.log("Invalid choice!");
            choice = "None";
        }
    }
    return choice;
}

function playRound() {
    let comp = getComputerChoice();
    let player = getHumanChoice();
    let hChoice = player.toLowerCase();
    let cChoice = comp.toLowerCase();
    if ((hChoice == "rock" && cChoice == "paper") || (hChoice == "paper" && cChoice == "scissors") || (hChoice == "scissors" && cChoice == "rock")) {
        console.log("Your choice: " + hChoice);
        console.log("Computer's choice: " + cChoice);
        console.log("You have lost.");
        return "player";
    }
    else if ((cChoice == "rock" && hChoice == "paper") || (cChoice == "paper" && hChoice == "scissors") || (cChoice == "scissors" && hChoice == "rock")) {
        console.log("Your choice: " + hChoice);
        console.log("Computer's choice: " + cChoice);
        console.log("You have won.");
        return "computer";
    }
    else {
        console.log("Both of you picked: " + hChoice);
        console.log("You have tied.");  
        return "none";
    }
}

function playGame() {
   
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i <= 5; i++) {
        let result = playRound();
        if(result == "player") {
            humanScore++;
        }
        else if (result == "computer") {
            computerScore++;
        }
    }
    console.log("End result")
    console.log("Computer: " + computerScore + "You: " + humanScore);
}