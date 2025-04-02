let us=0;
let bos=0;
const play = document.getElementById("play");
const allc=document.querySelectorAll(".choi")
const users=document.querySelector("#users");
const botsc=document.querySelector("#bots");




const gbot=()=>{
    const option=["rock","paper","scissors"];
    const ri=Math.floor(Math.random()*3);
    return option[ri];
}
const draw=()=>{
    console.log("game was drawn");
    play.innerText="Game Draw!!";
    play.style.backgroundColor="orange";
}
const showin=(uwin,ui,ci)=>{
    if(uwin){
        us++;
        users.innerText=us;
        console.log("user win");
        play.innerText=`You win!! Your "${ui}" beats "${ci}".`;
        play.style.backgroundColor="green";
       
    }else{
        bos++;
        botsc.innerText=bos;
        console.log("bot win");
        play.innerText=`You Lose!! "${ci}" beats "${ui}".`;
        play.style.backgroundColor="red";
      
    }

}
const playg=(use)=>{
    console.log("choice was ",use);
    const ci=gbot();
    console.log("choice of bot was :",ci);
    if(use===ci){
        draw();

    }else{
        let uwin=true;


        if(use==="rock"){
          uwin=ci==="paper"? false :true;
        }else if(use==="scissors"){
            uwin=ci==="rock"? false :true;
        }
        else if(use==="paper"){
            uwin=ci==="scissors" ? false:true;
        }
        showin(uwin,use,ci);
    }
}
allc.forEach((choi) => {
    console.log(choi);
    choi.addEventListener("click", ()=>{
        const use =choi.getAttribute("id");
           playg(use);
        }); 
});

