let boxes = document.querySelectorAll(".box");  //select all boxes 
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");


turn0 = true;        //player X and player O
const winPatters = [ //pattern to win the game
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => { //create a function for each element of boxes
    box.addEventListener("click", () => {  //event is performed on click 
        if (turn0) {
            //player O
            box.innerText = "O"
            turn0 = false;
        }
        else {
            //player X
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = "true";  //disabled is used for not change the box innerText
        checkWinner();
    });
});

const checkWinner = () => {
    for (let patten of winPatters) {
        ptn1Val = boxes[patten[0]].innerText;
        ptn2Val = boxes[patten[1]].innerText;
        ptn3Val = boxes[patten[2]].innerText;

        if (ptn1Val != "" && ptn2Val != 0 && ptn3Val != 0)
            if (ptn1Val == ptn2Val && ptn2Val == ptn3Val) {
                console.log("WINNER", ptn1Val);
                showWinner(ptn1Val);
            }
    }
}

let Winner = document.querySelector("win-game");
const showWinner = (Winner) => {
    msg.innerText = `Congratulations!,The winner is ${Winner}`;
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)
