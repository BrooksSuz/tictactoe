const Player = (name, mark, turn) => {
  return { name, mark, turn }; 
}

const playerOne = Player('Player 1', 'X', true); 
const playerTwo = Player('Player 2', 'O', false); 

const gameFlow = (function() {
  const divCells = document.querySelectorAll('div[class^=cell]'); 

  const _checkPlayerOneWin = () => {
    const win = 'Player One Wins!'; 
    if (divCells[0].textContent === 'X' && divCells[1].textContent === 'X' && divCells[2].textContent === 'X') {
      alert(win); 
    } else if (divCells[3].textContent === 'X' && divCells[4].textContent === 'X' && divCells[5].textContent === 'X') {
      alert(win); 
    } else if (divCells[6].textContent === 'X' && divCells[7].textContent === 'X' && divCells[8].textContent === 'X') {
      alert(win);
    } else if (divCells[0].textContent === 'X' && divCells[3].textContent === 'X' && divCells[6].textContent === 'X') {
      alert(win); 
    } else if (divCells[1].textContent === 'X' && divCells[4].textContent === 'X' && divCells[7].textContent === 'X') {
      alert(win); 
    } else if (divCells[2].textContent === 'X' && divCells[5].textContent === 'X' && divCells[8].textContent === 'X') {
      alert(win); 
    } else if (divCells[0].textContent === 'X' && divCells[4].textContent === 'X' && divCells[8].textContent === 'X') {
      alert(win); 
    } else if (divCells[2].textContent === 'X' && divCells[4].textContent === 'X' && divCells[6].textContent === 'X') {
      alert(win); 
    }
  }

  const _checkPlayerTwoWin = () => {
    const win = 'Player Two Wins!'; 
    if (divCells[0].textContent === 'O' && divCells[1].textContent === 'O' && divCells[2].textContent === 'O') {
      alert(win); 
    } else if (divCells[3].textContent === 'O' && divCells[4].textContent === 'O' && divCells[5].textContent === 'O') {
      alert(win); 
    } else if (divCells[6].textContent === 'O' && divCells[7].textContent === 'O' && divCells[8].textContent === 'O') {
      alert(win);
    } else if (divCells[0].textContent === 'O' && divCells[3].textContent === 'O' && divCells[6].textContent === 'O') {
      alert(win); 
    } else if (divCells[1].textContent === 'O' && divCells[4].textContent === 'O' && divCells[7].textContent === 'O') {
      alert(win); 
    } else if (divCells[2].textContent === 'O' && divCells[5].textContent === 'O' && divCells[8].textContent === 'O') {
      alert(win); 
    } else if (divCells[0].textContent === 'O' && divCells[4].textContent === 'O' && divCells[8].textContent === 'O') {
      alert(win); 
    } else if (divCells[2].textContent === 'O' && divCells[4].textContent === 'O' && divCells[6].textContent === 'O') {
      alert(win); 
    }
  }

  const playGame = () => { 
    for (let i = 0; i < divCells.length; i++) { 
      divCells[i].addEventListener('click', () => {
        if (divCells[i].textContent === '' && playerOne.turn === true) {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += playerOne.mark; 
          _checkPlayerOneWin(); 
        } else if (divCells[i].textContent === '' && playerTwo.turn === true) {
          divCells[i].classList.add('cells'); 
          divCells[i].textContent += playerTwo.mark; 
          _checkPlayerTwoWin(); 
        }

        if (playerOne.turn === true) {
          playerOne.turn = false; 
        } else if (playerOne.turn === false) {
          playerOne.turn = true; 
        }
        
        if (playerTwo.turn === true) {
          playerTwo.turn = false; 
        } else if (playerTwo.turn === false) {
          playerTwo.turn = true; 
        }
      });
    }
  }

  return { playGame }; 
})(); 

document.querySelector('.btn-new-game').addEventListener('click', () => {
  const divCells = document.querySelectorAll('div[class^=cell]');
  divCells.forEach(cell => {
    cell.classList.remove('cells'); 
    cell.textContent = ''; 
    playerOne.turn = true; 
    playerTwo.turn = false; 
  }); 
})


gameFlow.playGame();