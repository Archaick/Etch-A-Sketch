const grid = document.getElementById('container');
let gridIndex = 0;

while (gridIndex < (20*20)) {
    let gridLayer = document.createElement('div');
    gridLayer.classList.add('minibox');
    grid.appendChild(gridLayer);
    gridIndex++;
}

// find all elements with .minibox class and store in elements variable
const elements = document.querySelectorAll('.minibox');

// Add event listeners for the 'mouseenter' and 'mouseleave' events to each element
elements.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
});

hoverEffect = function (element) {
    element.addEventListener('mouseenter', handleMouseEnter);
}
elements.forEach(hoverEffect);

// Event handler for mouse enter
function handleMouseEnter(event) {
  // Add a CSS class to the element when the mouse enters
  event.target.classList.add('filled');
}


// Reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', handleReset);

function handleReset() {
  // Reset the class on your desired elements
  const elementsToReset = document.querySelectorAll('.filled');
  elementsToReset.forEach(element => {
    element.classList.remove('filled');
  });
}