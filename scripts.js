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
  
  const divCells = document.querySelectorAll('div[class^=cell]'); 

  const _winGame = () => {
    // horizontal wins
    if (divCells[0].textContent === 
      (divCells[1].textContent && divCells[2].textContent) && 
      divCells[0].textContent === 'X') {
      alert('you win!'); 
    } else if (divCells[3].textContent === (divCells[4].textContent && divCells[5].textContent) && divCells[3].textContent === 'X') {
      alert('you win!'); 
    } else if (divCells[6].textContent === (divCells[7].textContent && divCells[8].textContent) && divCells[6].textContent === 'X') {
      alert('you win!'); 
    }
  }

  const addMark = () => { 
    for (let i = 0; i < divCells.length; i++) { 
      divCells[i].addEventListener('click', () => {
        if (divCells[i].textContent === '') {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += 'X'; 
        }
        _winGame(); 
      });
    }
  }

  return { getName, addMark }; 
}

const playerOne = Player().addMark();