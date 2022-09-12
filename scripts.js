const ticTaceToe = (() => {
  const gameBoard = { 
    arr: [
      'X', 'O', 'X', 
      'O', 'O', 'X', 
      'X', 'O', 'X'
    ] }; 

  const populateBoard = () => {
    for (let i = 0; i < gameBoard.arr.length; i++) {
      let currentCell = document.querySelector(`.cell-${i + 1}`); 
      currentCell.textContent += gameBoard.arr[i]; 
      currentCell.classList.add('cells'); 
    }
  }

  return { populateBoard }; 
  })(); 
  
const Player = (name) => {
  const getName = () => name; 

  const addMark = () => { 
    const divCells = document.querySelectorAll('div[class^=cell]'); 
    for (let i = 0; i < divCells.length; i++) { 
      divCells[i].addEventListener('click', () => {
        if (divCells[i].textContent === '') {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += 'X'; 
        }
      });
    }
  }

  return { getName, addMark }; 
}

const playerOne = Player().addMark();