let local_btn = document.getElementById("local");
let local_pages = document.querySelector(".local_pages");
let span = document.getElementById("span")

local_btn.addEventListener("click",function(){
    local_pages.style. transform = "translateX(0px)";
   
});
span.addEventListener("click",function(){
local_pages.style.transform = "translateX(450px)";
})


let plusbtn = document.querySelector("#plus");
let minusbtn = document.querySelector("#minus");
let nulinp = document.querySelector("#nul");

plusbtn.addEventListener("click",()=>{
    nul.value = parseInt(nul.value)+1;
});
minusbtn.addEventListener("click",()=>{
    if(nul.value <= 0){
nul.value = 0;
    }
    else{
        nul.value = parseInt(nul.value)-1;
    }
});


let pBtn = document.querySelector("#pBtn");
let mBtn = document.querySelector("#mBtn");
let zeroinp = document.querySelector("#zero");

pBtn.addEventListener('click',()=>{
    zero.value = parseInt(zero.value)+1;
});
mBtn.addEventListener('click',()=>{
    if(zero.value <= 0){
        zero.value = 0;
    }
    else{
        zero.value = parseInt(zero.value)-1;
    }
});


let Pbtn = document.querySelector("#Pbtn");
let Mbtn = document.querySelector("#Mbtn");
let nol = document.querySelector("#nol");

Pbtn.addEventListener('click',()=>{
    nol.value =parseInt(nol.value)+1;
});

Mbtn.addEventListener('click',()=>{
    if(nol.value <= 0){
        nol.value = 0;
    }
    else{
        nol.value = parseInt(nol.value)-1;
    }
});






let section1 = document.querySelector(".section1");

const data = [
{
    id:1,
    narxi:100,
    nomi:s,
    soni:50,
    img:"./icons/img/p1 1.png"
}

]

data.map((item)=>{
    section1.innerHTML +=`

    <div class="sec1_1">
    <img scr="${item.img}" alt ="" >

    <p> ${item.id} </p>
    <p> ${item.narxi} </p>
    <p> ${item.nomi} </p>
    <p> ${item.soni} </p>
    <button> sotib olish </button>
    </div>
    `;
})
