let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);

    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add('filled');

        if (checkWinner(currentPlayer)) {
            document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every((cell) => cell !== '')) {
            document.getElementById('status').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner(player) {
    return winningCombos.some((combo) => {
        return combo.every((index) => board[index] === player);
    });
}

function restartGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.querySelectorAll('.cell').forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('filled');
    });
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
}

restartGame();
