/* const ticTaceToe = (() => {
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
  })(); */
  
const Player = () => {
  const name = prompt('Enter your name'); 
  const mark = prompt("X's or O's?").toUpperCase; 

  const divCells = document.querySelectorAll('div[class^=cell]'); 

  const _winGame = () => {
    // horizontal wins
    if (divCells[0].textContent === (divCells[1].textContent && divCells[2].textContent) && divCells[0].textContent === mark) {
      alert(`${name} Wins!`); 
    } else if (divCells[3].textContent === (divCells[4].textContent && divCells[5].textContent) && divCells[3].textContent === mark) {
      alert(`${name} Wins!`); 
    } else if (divCells[6].textContent === (divCells[7].textContent && divCells[8].textContent) && divCells[6].textContent === mark) {
      alert(`${name} Wins!`); 
    }

    //vertical wins
    if (divCells[0].textContent === (divCells[3].textContent && divCells[6].textContent) && divCells[0].textContent === mark) {
      alert(`${name} Wins!`); 
    } else if (divCells[1].textContent === (divCells[4].textContent && divCells[7].textContent) && divCells[1].textContent === mark) {
      alert(`${name} Wins!`); 
    } else if (divCells[2].textContent === (divCells[5].textContent && divCells[8].textContent) && divCells[2].textContent === mark) {
      alert(`${name} Wins!`); 
    }

    //diagonal wins 
    if (divCells[0].textContent === (divCells[4].textContent && divCells[8].textContent) && divCells[0].textContent === mark) {
      alert(`${name} Wins!`); 
    } else if (divCells[2].textContent === (divCells[4].textContent && divCells[6].textContent) && divCells[2].textContent === mark) {
      alert(`${name} Wins!`); 
    }
  }

  const addMark = () => { 
    for (let i = 0; i < divCells.length; i++) { 
      divCells[i].addEventListener('click', () => {
        if (divCells[i].textContent === '') {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += mark; 
        }
        //check if game is won
        _winGame(); 
      });
    }
  }

  return { addMark }; 
}

document.querySelector('.btn-new-game').addEventListener('click', () => {
  const gameFlow = (() => {
    //create players
    const playerOne = Player(); 
    const playerTwo = Player(); 
  })(); 
}); 