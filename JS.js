let boxes =document.querySelectorAll(".box");
let resetBtr = document.querySelector("#reset");
let newGameBtr = document.querySelector("#newGame");
let msgContainer = document.querySelector(".massage");
let mas = document.querySelector("#msg");

let xTurn = true; // true = X print, false = O print
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {

    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false; // Enable the box for a new game
    });
    xTurn = true; // Reset to X's turn
    msgContainer.classList.add("hide"); // Hide the message container

}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        console.log("Box clicked: ", index);
        box.innerText = "X";
        if(xTurn){
            box.innerText = "X";
            xTurn = false;
        }
        else{
            box.innerText = "O";
            xTurn = true;
        }
        box.disabled = true; // Disable the box after it's clicked
        checkWinner();
    });
}); 

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
}

const enableBoxes = () => {
    boxes.forEach(box => box.disabled = false);
}
const showWinner = (winner) => {
    msgContainer.style.display = "block";
    mas.innerText = `Player ${winner} wins!`;
    boxes.forEach(box => box.disabled = true); // Disable all boxes after a winner is found
    disableBoxes();
}

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val && pos1Val === pos2Val && pos1Val === pos3Val){
            showWinner(pos1Val);
            return;
        }
    }
}

newGameBtr.addEventListener("click", resetGame);
resetBtr.addEventListener("click", resetGame);
    