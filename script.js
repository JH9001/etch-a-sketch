let gridContainer = document.querySelector('.gridContainer');

//could do input
let userInput = 16;

const createGrid = function () {
  for (let i = 0; i < userInput * userInput; i++) {
    let gridDivs = document.createElement('div');
    gridDivs.className = 'blocks';
    gridDivs.textContent = '';
    gridContainer.appendChild(gridDivs);
    gridContainer.style = `grid-template-rows: repeat(${userInput}, 1fr)`;
    gridContainer.style = `grid-template-columns: repeat(${userInput}, 1fr)`;
  }
};

createGrid();