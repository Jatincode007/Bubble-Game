var random=0;
function makeBubble(){
    
var bubbles="";

for(var i= 1; i<=184; i++){

   var value= Math.floor(Math.random()*10);
   bubbles += `<div id="bubble">${value}</div>`;
  
}

document.querySelector("#pbtm").innerHTML=bubbles;
}

var timer=60;
function runtimer(){
    
       var clear= setInterval(function()
        {

            if(timer>0){
            timer--;
            document.querySelector(".timerval").textContent=timer;}
            else{
                clearInterval(clear);
                document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
            }
        },1000
    )
    
}

function newHit(){
    random= Math.floor(Math.random()*10);
    document.querySelector(".hitter").textContent=random;
}
var score=0;
function increaseScore(){
    newScore = score+=10;
    document.querySelector(".scoreval").textContent=newScore;

}

function darkmode(){




}


document.querySelector("#pbtm")
.addEventListener("click",function(e){
     var clicked = Number(e.target.textContent);
     if(clicked === random){
        increaseScore();
        newHit();
        makeBubble();
     }
     if(clicked !== random){

 
     
       


     }
     


})
makeBubble();
runtimer();
newHit();

