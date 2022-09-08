const ticTaceToe = (() => {
  const gameBoard = { arr: [] }; 
  const displayController = {}; 
  return { gameBoard, displayController }; 
})(); 

const player = name => {
  const getName = () => name; 
  return { getName }; 
}