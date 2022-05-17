//grid container
const gridContainer = document.querySelector('.gridContainer');

//buttons
const colorSelect = document.querySelector('.colorSelect')
const rainbowButton = document.querySelector('.rainbowButton');
const eraserButton = document.querySelector('.eraserButton');
const slider = document.querySelector('.slider');
const clearButton = document.querySelector('.clearButton');

//user select slider value which creates grid size
slider.addEventListener('change', function() {
  gridContainer.innerHTML = '';
  createGrid();
});

//create grid from slider value
const createGrid = () => {
  for (let i = 0; i < slider.value * slider.value; i++) {
    const gridDivs = document.createElement('div');
    gridDivs.className = 'blocks';
    gridDivs.textContent = '';
    gridContainer.appendChild(gridDivs);
    gridContainer.style = `grid-template-rows: repeat(${slider.value}, 1fr)`;
    gridContainer.style = `grid-template-columns: repeat(${slider.value}, 1fr)`;
  }
};

createGrid();

//change block color on hover
gridContainer.addEventListener('mouseover', function (e) {
  if (e.target.className == 'blocks') {
    e.target.style.backgroundColor = colorSelect.value;
  }
});