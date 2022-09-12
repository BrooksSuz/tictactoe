const gameFunctions = (() => {
  const gameBoard = { 
    playerOneArr: [], 
    playerTwoArr: []
  }; 

  const winCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
  ]; 

  return { gameBoard, winCombos }; 
})(); 
  
const Player = (name, mark, turn) => {
  return { name, mark, turn }; 
}

const playerOne = Player('Player 1', 'X', true); 
const playerTwo = Player('Player 2', 'O', false); 

const gameFlow = (function() {
  const divCells = document.querySelectorAll('div[class^=cell]'); 

  const _winGame = () => {

  }

  const playGame = () => { 
    for (let i = 0; i < divCells.length; i++) { 
      divCells[i].addEventListener('click', () => {
        if (divCells[i].textContent === '' && playerOne.turn === true) {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += playerOne.mark; 
        } else if (divCells[i].textContent === '' && playerTwo.turn === true) {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += playerTwo.mark; 
        }

        if (playerOne.turn === true) {
          gameFunctions.gameBoard.playerOneArr.push(i); 
          playerOne.turn = false; 
        } else if (playerOne.turn === false) {
          playerOne.turn = true; 
        }
        
        if (playerTwo.turn === true) {
          gameFunctions.gameBoard.playerTwoArr.push(i); 
          playerTwo.turn = false; 
        } else if (playerTwo.turn === false) {
          playerTwo.turn = true; 
        }
      });
    }
  }

  return { playGame }; 
})(); 

gameFlow.playGame();