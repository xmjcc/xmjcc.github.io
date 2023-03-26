// Set up canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set up bug image
const bugImg = new Image();
bugImg.src = 'bug.png';

// Set up game variables
let score = 0;
let interval = 1000; // milliseconds
let bugX = 0;
let bugY = 0;

// Draw bug on canvas
function drawBug() {
  ctx.drawImage(bugImg, bugX, bugY);
}

// Move bug to a random position on canvas
function moveBug() {
  bugX = Math.floor(Math.random() * (canvas.width - bugImg.width));
  bugY = Math.floor(Math.random() * (canvas.height - bugImg.height));
}

// Update game based on user click
function handleMouseClick(event) {
  const clickX = event.clientX - canvas.offsetLeft;
  const clickY = event.clientY - canvas.offsetTop;

  if (
    clickX >= bugX &&
    clickX <= bugX + bugImg.width &&
    clickY >= bugY &&
    clickY <= bugY + bugImg.height
  ) {
    score++;
    moveBug();
    updateScore();
    updateInterval();
  }
}

// Update score in DOM
function updateScore() {
  document.getElementById('score').innerHTML = `Score: ${score}`;
}

// Update timer interval for bug hopping
function updateInterval() {
  if (interval > 100) {
    interval -= 50;
  }
}

// Reset game speed
function resetSpeed() {
  interval = 1000;
}

// Reset game score
function resetScore() {
  score = 0;
  updateScore();
}

// Set up event listeners
canvas.addEventListener('click', handleMouseClick);
document.getElementById('resetSpeedButton').addEventListener('click', resetSpeed);
document.getElementById('resetScoreButton').addEventListener('click', resetScore);

// Start game loop
setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBug();
}, interval);