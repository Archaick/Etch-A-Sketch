// Hero video speed
const video = document.getElementById('hero');
video.playbackRate = 0.65;

// Div container manipulation here
const grid = document.getElementById('container');
let gridIndex = 0;

while (gridIndex < (80*80)) {
    let gridLayer = document.createElement('div');
    gridLayer.classList.add('minibox');
    grid.appendChild(gridLayer);
    gridIndex++;
}

// Find all elements with .minibox class and store in elements variable
const elements = document.querySelectorAll('.minibox');

// Variable to track the state of the "W" key
let isWKeyDown = false;

// Add event listener for the 'mouseenter' event to each element
elements.forEach(element => {
  element.addEventListener('mouseenter', handleMouseEnter);
});

// Add event listeners for the 'keydown' and 'keyup' events on the document
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Event handler for mouse enter
function handleMouseEnter(event) {
  // Check if the "W" key is currently held down
  if (isWKeyDown) {
    event.target.classList.add('filled');
  }
}

// Event handler for keydown event
function handleKeyDown(event) {
  // Check if the "W" key is pressed
  if (event.key === 'w' || event.key === 'W') {
    isWKeyDown = true;
  }

  // Check if the "S" key is pressed
  if (event.key === 's' || event.key === 'S') {
    const elementsToReset = document.querySelectorAll('.filled');
    elementsToReset.forEach(element => {
      element.classList.remove('filled');
    });
  }
}

// Event handler for keyup event
function handleKeyUp(event) {
  // Check if the "W" key is released
  if (event.key === 'w' || event.key === 'W') {
    isWKeyDown = false;
  }
}

/* Erase button */
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', handleReset);
function handleReset() {
  // Reset the class on your desired elements
  const elementsToReset = document.querySelectorAll('.filled');
  elementsToReset.forEach(element => {
    element.classList.remove('filled');
  });
}
