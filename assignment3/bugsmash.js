


const gameAreaEl = document.getElementById("gameArea");
const bugEl = document.getElementById("target");


window.onload = function () {


}

let bugPosX = 0;
let bugPosY = 0;
let score = 0;
let initialySpeed = 3000;
let speed = initialySpeed;
let mysetInterval = null;
let previousscore = 0;

let scoreEl = document.getElementById("score");
let speedEl = document.getElementById("speed");

scoreEl.innerHTML = "Score:" + score;



let resetScoreBtn = document.getElementById("resetscore");
let resetSpeedBtn = document.getElementById("resetspeed");

let gamestartBtn = document.getElementById("gamestart");


resetScoreBtn.addEventListener("click", () => {
    score = 0;
    speed = initialySpeed;
    clearInterval(mysetInterval);
    bugEl.removeEventListener('click', handleClickEventOnTarget);
    gameAreaEl.removeEventListener('click', handleClickEventOnTarget, true);
    bugEl.style.left = 0 + "px";
    bugEl.style.top = 0 + "px";

    // console.log("reset button cliked");
    scoreEl.innerHTML = "Score:" + score;

});


gamestartBtn.addEventListener("click", () => {
    bugEl.addEventListener('click', handleClickEventOnTarget);
    gameAreaEl.addEventListener('click', handleClickEventOnTarget, true);
    startTime();


});

resetSpeedBtn.addEventListener("click", () => {
    clearInterval(mysetInterval);
    speed = initialySpeed;
    score = Math.max(score, 0);

    scoreEl.innerHTML = "Score:" + score;
    startTime();

});

gameAreaEl.oncontextmenu = function () {
    return false;
}



function startTime() {
    mysetInterval = setInterval(moveObject, speed);
}



function moveObject() {

    bugPosX = 550 * Math.random();
    bugPosY = 350 * Math.random();

    bugEl.style.left = bugPosX + "px";
    bugEl.style.top = bugPosY + "px";
    speedEl.innerHTML = "Speed (milliseconds):" + speed;

}

let counter = 0;



function handleClickEventOnTarget(event) {


    if (event.currentTarget.id === "target") {
        // do not add score for fisrt click

        score = score + 2;
        score = Math.max(score, 0);

        scoreEl.innerHTML = "Score:" + score;

        if (score % 20 == 0 && score > 0 && score > previousscore) {

            speed = speed - 100;
            clearInterval(mysetInterval);
            startTime();

        }
        if (score % 20 == 19 && score > 0 && score < previousscore) {

            speed = speed + 100;
        }
    }




    // console.log("the current target is bugItem", event.currentTarget);


    else {
        score--;

        // console.log("in current area is bugArea", event.currentTarget)
    }


};











// bugEl.addEventListener("click", (event) => {
//     // console.log('i clicked bugEL.target', event.target);
//     // console.log('i clicked bugEL.target', event.currenttarget);

//     // console.log('i clicked bugEL',event);
//     // console.log('i clicked bugEL event.target', event.target);
//     event.target.style.backgroundColor = 'green';
//     // console.log('I clicked bugEL this', this);
//     // score++;
//     // scoreEl.innerHTML = "Score:" + score;
//     // if (score === 1000) {
//     //     stop();
//     // }


//     // event.stopPropagation();

//     // console.log("click event recorded");

// });



//todo-1 window onload to move the bug initialy

//todo-2 use the canvas for the background and for the bug

//todo-3 move redsquare and set the interval to different speed