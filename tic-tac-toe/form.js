let boxes=document.querySelectorAll(".play");
let resetbtn=document.querySelector("#reset");
let newgbu=document.querySelector("#ngb")
let msgContainer=document.querySelector(".msg-container")
let msge=document.querySelector("#msg");
let turnO=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach(play => {
    play.addEventListener("click",()=>{
        if(turnO){
            play.innerText="O";
            play.style.color="#9c89b8";
            turnO=false;
        }else{
            play.innerText="X";
            play.style.color="#606060";
            turnO=true;
        }
        play.disabled=true;
        
        checkWinner();
        
    }
    )
});
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor = "";
    }
}

const showWinner = (winner)=>{
   msge.innerText=`Congratulations! The winner is  "${winner}"`;
    msgContainer.classList.remove("hide");
};



const checkWinner=() =>{
    for (let pattern of winpattern) { 
        let po1 = boxes[pattern[0]].innerText;
        let po2 = boxes[pattern[1]].innerText;
        let po3 = boxes[pattern[2]].innerText;
        if (po1 != "" && po2 != "" && po3 != "") {
            if (po1 === po2 && po2 === po3) {
                console.log("winner", po1);
                showWinner(po1);
                boxes.forEach((box) => box.disabled = true);
            }
        }
    }
};
newgbu.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
