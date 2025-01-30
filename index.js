var hitrn = 0;
var timer = 60;
var score = 0;

function makeBubble(){
    var clutter = "";
    for (var i = 1; i <= 150; i++) {
        var random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#finalScore").innerHTML = score; 
            document.querySelector("#gameOverScreen").style.display = "block"; 
            document.querySelector(".panel").style.display = "none"; 
        }
    }, 1000);
}
function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

document.querySelector(".pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.innerHTML);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();
