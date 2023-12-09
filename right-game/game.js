let board =[
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X")
];
let life=3;
let isWin = false;

const message = document.getElementById("message");
message.innerText = `You have ${life} lives`;

const rr = Math.floor(Math.random() * 5);
const rc = Math.floor(Math.random() * 5);
board[rr][rc] = "O";

let htmlCode = "";
let rowNumber=0;
for(const row of board){
    let colNumber = 0;
    let html = "";
    for(const col of row){
        const id=`btn${rowNumber}${colNumber}`
        html += `<div class="button" id="${id}" onclick='check("${id}","${col}")'><i class="fa-solid fa-circle"></i></div>`
        colNumber++;
    }
    
    htmlCode += `<div>${html}</div>`;
    rowNumber++;
}

const container = document.getElementById("container");
container.innerHTML = htmlCode;
const loesd = new Audio("loesd.mp3");
const wind = new Audio("wind.mp3");
const hojigdvol = new Audio("hojigdvol.mp3");
const ehlel = new Audio("ehlel.mp3");
ehlel.play();
function check(id,value) {
    const btn = document.getElementById(id);
    if(life===0 || isWin === true || btn.innerHTML.indexOf("fa-circle")<0){
        return;
    }
    const m=document.getElementById("message");
    if(value==="X"){
        btn.innerHTML = '<i class="fa-solid fa-skull-crossbones"></i>';
        life--;
        m.innerText=`You have ${life} lives`;
        loesd.play();
    }else{
        btn.innerHTML= '<i class="fa-solid fa-face-laugh-squint"></i>';
        m.innerText = `You WIN :)`;
        isWin = true;
        wind.play();
    }
    if(life===0){
        m.innerText = "You are DEAD Ha Ha Ha !!!";
        hojigdvol.play();
    }
}