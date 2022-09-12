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
  
const Player = (name, mark, turn) => {
  return { name, mark, turn }; 
}

const playerOne = Player('Player 1', 'X', true); 
const playerTwo = Player('Player 2', 'O', false); 

const gameFlow = (function() {
  const divCells = document.querySelectorAll('div[class^=cell]'); 

  //fix
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
        if (divCells[i].textContent === '' && playerOne.turn === true) {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += playerOne.mark; 
        } else if (divCells[i].textContent === '' && playerTwo.turn === true) {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += playerTwo.mark; 
        }
        //check if game is won
        _winGame(); 
      });
    }
  }
})(); 