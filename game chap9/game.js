let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");        
const choices = document.querySelectorAll(".choice");


const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const  options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const gameDraw = () => {
    msg.innerText = "game are Draw. play again."
    msg.style.backgroundcolor = "#081b31";   
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userscorepara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor = "green";
    } else {
        compScore++
        compscorepara.innerText = compScore;
        msg.innerText =  `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundcolor = "red";  
    }

}; 


const playGame = (userChoice) => {
    const compChoice = genCompChoice ();
    msg.style.backgroundcolor = "green";

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else { 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin,userChoice,compChoice);
    }

     
};

choices.forEach ((choice) =>{        
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
         playGame (userChoice);

    }); 
  
}) 
