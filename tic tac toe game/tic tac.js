let body = document.querySelectorAll("body");
let boxes = document.querySelectorAll(".box");
let reset  = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno) {
            box.innerText = "O";
            box.style.color = "red";

            turno = false; 
              
        } else {
            box.innerText = "X";
            turno = true;   
        }
             box.disabled = true;
             chekWinner();
    });
});

const disableBoxes= () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes= () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableBoxes(); 
    
}
const chekWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    };
};

newbtn.addEventListener("click", resetGame);
reset.addEventListener ("click", resetGame);