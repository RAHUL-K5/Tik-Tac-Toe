let boxes = document.querySelectorAll(".play");
let resetbtn = document.querySelector("#reset");
let newgbu = document.querySelector("#ngb");
let msgContainer = document.querySelector(".msg-container");
let msge = document.querySelector("#msg");

let playerOInput = document.querySelector("#playerO");
let playerXInput = document.querySelector("#playerX");
let startBtn = document.querySelector("#start");
let playerInputContainer = document.querySelector(".player-input");

let turnO = true;
let playerOName = "Player O";
let playerXName = "Player X";

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Start Game after input
startBtn.addEventListener("click", () => {
    if (playerOInput.value.trim() !== "" && playerXInput.value.trim() !== "") {
        playerOName = playerOInput.value;
        playerXName = playerXInput.value;
        
        // Hide input fields and start button
        playerInputContainer.style.display = "none"; 
        
        resetgame();
    } else {
        alert("Please enter names for both players!");
    }
});

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((play) => {
    play.addEventListener("click", () => {
        if (turnO) {
            play.innerText = "O";
            play.style.color = "red";
            turnO = false;
        } else {
            play.innerText = "X";
            play.style.color = "brown";
            turnO = true;
        }
        play.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "";
    }
};

const showWinner = (winner, winningPattern) => {
    let winnerName = winner === "O" ? playerOName : playerXName;
    msge.innerText = `Congratulations! ${winnerName} wins 🎉`;
    msgContainer.classList.remove("hide");

    // Highlight winning boxes
    winningPattern.forEach((index) => {
        boxes[index].style.backgroundColor = "#90EE90"; // Light green
    });

    // Disable all boxes
    boxes.forEach((box) => (box.disabled = true));
};

const checkWinner = () => {
    for (let pattern of winpattern) {
        let po1 = boxes[pattern[0]].innerText;
        let po2 = boxes[pattern[1]].innerText;
        let po3 = boxes[pattern[2]].innerText;
        if (po1 !== "" && po2 !== "" && po3 !== "") {
            if (po1 === po2 && po2 === po3) {
                showWinner(po1, pattern);
                return;
            }
        }
    }
};

newgbu.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
