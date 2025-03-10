let humanScore = 0;
let computerScore = 0;
let result = document.getElementById("result-container");
let rColumn1 = document.getElementById("result-column-1");
let rColumn2 = document.getElementById("result-column-2");
let resultText = document.getElementById("result-text");
let nextButton = document.getElementById("next-button");
let hScore = document.getElementById("h-score");
let cScore = document.getElementById("c-score");

let images = 
{
    "rock" : "./images/rock.png",
    "paper" : "./images/paper.png",
    "scissors" : "./images/scissors.png"
};

let buttons = document.getElementsByClassName("option");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let id = event.target.id;
        if(id == "paper") {
            playRound("paper");
        }
        else if (id == "rock") {
            playRound("rock");
        }
        else{
            playRound("scissors");
        }
    });
}

nextButton.addEventListener('click', () =>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "flex";
    }
    result.style.display = "none";
    rColumn1.innerHTML = ``;
    rColumn2.innerHTML = ``;
    nextButton.style.display = "none";
    resultText.innerText = ``;
});


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = choices[Math.floor(Math.random() * 3)];
    return random;
}

function playRound(option) {
    let comp = getComputerChoice();
    let player = option;
    let hChoice = player.toLowerCase();
    let cChoice = comp.toLowerCase();
    if ((hChoice == "rock" && cChoice == "paper") || (hChoice == "paper" && cChoice == "scissors") || (hChoice == "scissors" && cChoice == "rock")) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
        resultText.innerText = "You lost!";
        computerScore++;
    }
    else if ((cChoice == "rock" && hChoice == "paper") || (cChoice == "paper" && hChoice == "scissors") || (cChoice == "scissors" && hChoice == "rock")) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
        resultText.innerText = "You lost!";
        humanScore++;
    }
    else {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
        resultText.innerText = "You tied!";
    }
    result.style.display = "flex";
    //add data for the columns later
    rColumn1.innerHTML = `<img src="${images[hChoice]}" id="${hChoice}" class="option"><h3>Your Choice</h3>`;
    rColumn2.innerHTML = `<img src="${images[cChoice]}" id="${cChoice}" class="option"><h3>Computer's Choice</h3>`;
    nextButton.style.display = "block";
    
    hScore.innerText = `Your Score: ${humanScore}`;
    cScore.innerText = `Computer Score: ${computerScore}`;
}

