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
  
const Player = name => {
  const getName = () => name; 
  return { getName }; 
}

const Brooks = Player('Brooks'); 
const Jake = Player('Jake'); 

ticTaceToe.populateBoard(); 