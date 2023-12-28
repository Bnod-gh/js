let label=document.getElementById("label");
const generate=document.getElementById("btn1").addEventListener("click",numgen);
const reset=document.getElementById("btn2").addEventListener("click",resetkey);
function numgen(){
    let a=Math.floor(Math.random()*6)+1;
    label.innerHTML=a
    console.log(a)
}


function resetkey(){
    label.innerHTML=0
}