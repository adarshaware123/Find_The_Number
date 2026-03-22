var timer=60;
var score=0;
var n=0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function decreasescore(){
    score=score-20;
    document.querySelector("#scoreval").textContent=score;
}
function makebubble(){
    var culter="";
for(var i=1;i<=100;i++){
    var rn=Math.floor(Math.random()*10);
    culter+=`<div class="bubble">${rn}</div>`
}
document.querySelector("#bottompanel").innerHTML=culter;
}
function gethit(){
     n=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=n;
}
function runtimer(){
     var timerintervar =setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#time").textContent=timer
        }  else{
            clearInterval(timerintervar);
            document.querySelector("#bottompanel").innerHTML="";
            document.querySelector("#scorecard").style.display="flex";
            document.querySelector("#scorereturn").innerHTML=score;
        }    
     },1000);
}
document.querySelector("#bottompanel")
.addEventListener("click",function(det){
    var clicked=Number(det.target.textContent);

    if(clicked===n){
        increasescore();
        makebubble();
        gethit();

    }else{
        decreasescore();
        makebubble();
        gethit();

    }
})
gethit();
runtimer();
makebubble();
