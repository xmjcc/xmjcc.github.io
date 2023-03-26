// Define canvas and context variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define game variables
let score = 0;
let lives = 3;
let bugs = [];

// Add event listener to canvas
canvas.addEventListener("click", function(event) {
    // Check if player clicked on a bug
    for (let i = 0; i < bugs.length; i++) {
        let bug = bugs[i];
        if (event.clientX >= bug.x && event.clientX <= bug.x + bug.width
            && event.clientY >= bug.y && event.clientY <= bug.y + bug.height) {
            // Player hit the bug, add points and remove the bug
            score += 10;
            bugs.splice(i, 1);
            break;
        }
    }
});

// Define game loop function
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bugs on the canvas
    for (let i = 0; i < bugs.length; i++) {
        let bug = bugs[i];
        ctx.fillStyle = bug.color;
        ctx.fillRect(bug.x, bug.y, bug.width, bug.height);
        bug.y += bug.speed;
        // Remove the bug if it goes off the bottom of the canvas
        if (bug.y > canvas.height) {
            bugs.splice(i, 1);
            lives--;
            break;
        }
    }

    // Draw score and lives on the canvas
    ctx.fillStyle = "black";
    ctx.font = "bold 20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
    ctx.fillText("Lives: " + lives, 10, 60);

    // Check if game is over
    if (lives <= 0) {
        clearInterval(interval);
        alert("Game Over! Your final score is " + score);
    }
}

// Add bugs to the game
function addBugs() {
    let bug = {
        x: Math.random() * (canvas.width - 50),
        y: 0,
        width: 50,
        height: 50,
        speed: Math.random() * 5 + 1,
        color: "green"
    };
    bugs.push(bug);
}

// Start the game loop and bug spawning
let interval = setInterval(function() {
    gameLoop();
    if (bugs.length < 10) {
        addBugs();
    }
}, 30);