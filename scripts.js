const ticTaceToe = (() => {
  let divBoard = document.createElement('div'); 
  const gameBoard = { 
    arr: [
      'X', ' ', 'X', 
      'O', 'O', ' ', 
      'X', 'O', 'X'
    ] }; 
    const generateGameboard = () => { 
      for (let i = 0; i < gameBoard.arr.length; i++) {
        divBoard.textContent += gameBoard.arr[i]; 
        if ((i + 1) % 3 === 0 && (i + 1) % 2 === 0) {
          document.body.appendChild(divBoard); 
          divBoard = document.createElement('div'); 
        }
      }
    } 
    return { generateGameboard }; 
  })(); 
  
const Player = name => {
  const getName = () => name; 
  return { getName }; 
}

const Brooks = Player('Brooks'); 
const Jake = Player('Jake'); 

ticTaceToe.generateGameboard(); 