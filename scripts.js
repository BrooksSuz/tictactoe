// CHECK WHICH GIT BRANCH YOU'RE ON 



const ticTaceToe = (() => {
  const gameBoard = { 
    arr: [
      'X', 'O', 'X', 
      'O', 'O', 'X', 
      'X', 'O', 'X'
    ] }; 

    

    return {  }; 
  })(); 
  
const Player = name => {
  const getName = () => name; 
  return { getName }; 
}

const Brooks = Player('Brooks'); 
const Jake = Player('Jake'); 

ticTaceToe.createGameBoard(); 