


const gameAreaEl = document.getElementById("gameArea");
const bugEl = document.getElementById("target");


window.onload = function () {


}

let bugPosX = 0;
let bugPosY = 0;
let score = 0;
let speed = 2000;
let mysetInterval = null;
let previousscore =0;

let scoreEl = document.getElementById("score");
let speedEl = document.getElementById("speed");

scoreEl.innerHTML = "Score:" + score;



let resetScoreBtn = document.getElementById("resetscore");
let resetSpeedBtn = document.getElementById("resetspeed");

let gamestartBtn = document.getElementById("gamestart");


resetScoreBtn.addEventListener("click", () => {
    score = 0;
    console.log("reset button cliked");
    scoreEl.innerHTML = "Score:" + score;

});


gamestartBtn.addEventListener("click", () => {
    startTime();


});

resetSpeedBtn.addEventListener("click", () => {
    clearInterval(mysetInterval)
    speed = 2000;
    score = Math.max(score, 0);

    scoreEl.innerHTML = "Score:" + score;
    startTime();

});



// gameAreaEl.addEventListener('click', handleClickEventOnTarget);
bugEl.addEventListener('click', handleClickEventOnTarget, true);
gameAreaEl.addEventListener('click', handleClickEventOnTarget, true);


function startTime() {
    mysetInterval = setInterval( moveObject, speed);
}


function moveObject() {
  
    randomPosition();
    speedEl.innerHTML = "Speed (milliseconds):" + speed;
}



function randomPosition() {

    bugPosX = 550 * Math.random();
    bugPosY = 350 * Math.random();

    bugEl.style.left = bugPosX + "px";
    bugEl.style.top = bugPosY + "px";


}

let counter = 0;

function handleClickEventOnTarget(event) {
    if (event.currentTarget.id === "target") {
        // do not add score for fisrt click
        if (counter == 0) { counter++ } //d bug in start position, click no score
        else { score = score + 2; }


        // console.log("the current target is bugItem", event.currentTarget);


    } else {
        score--;

        // console.log("in current area is bugArea", event.currentTarget)
    }



    score = Math.max(score, 0);

    scoreEl.innerHTML = "Score:" + score;


    if (score % 5 == 0 & score > 0) {

        if (score > previousscore){
            speed = speed - 100;
        } else{
            speed = speed+100;
        }
      
        if (mysetInterval !== null) { clearInterval(mysetInterval) }

        mysetInterval = setInterval( moveObject, speed);    

        previousscore = score; //record revious score for compare with current score
    

    };



}





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