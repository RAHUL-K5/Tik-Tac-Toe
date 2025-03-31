let us=0;
let bos=0;
const allc=document.querySelectorAll(".choi")
const gbot=()=>{
    const option=["rock","paper","scissor"]
    const ri=Math.floor(Math.random()*3);
    return ri;
}
const playg=(use)=>{
    console.log("choice was ",use);
}
allc.forEach((choi) => {
    console.log(choi);
    choi.addEventListener("click", ()=>{
        const use =choi.getAttribute("id");
           playg(use);
        }); 
});

