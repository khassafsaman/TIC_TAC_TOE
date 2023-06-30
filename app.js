// player "X " first player
let currentPlayer = "X";
let currentTurn = "X";
let gameEnded = false;

const board = ["", "", "", "", "", "", "", "", ""];
let ScoreX = 0, ScoreO = 0;
const result = document.querySelector(".result");
const currentTurnElement = document.getElementById("currentTurn");
// X/O on click
function placeMark(index) {
    if (board[index] === "" && !gameEnded) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;

        if (currentPlayer == "X") {
            document.getElementsByClassName("cell")[index].style.color = "black";
        } else {
            document.getElementsByClassName("cell")[index].style.color = "red";
        }

        // condition to win
        if (checkWin()) {
            setTimeout(() => {
                alert("congratulations" + "\n" + currentPlayer + " wins!");
            }, 10);
            if (currentPlayer == "X") {
                ScoreX++;
            } else {
                ScoreO++;
            }
            result.innerHTML = `${ScoreX}-${ScoreO}`;
            gameEnded = true;
        } else if (board.every(cell => cell !== "")) {
            setTimeout(() => {
                alert("The game equalised!");
            }, 10);
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            currentTurn = currentPlayer;
            currentTurnElement.innerText = currentTurn;
        }
    }
}
// win pattern Array & checkWin
function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
            document.getElementsByClassName("cell")[a].classList.add("winning-cell");
            document.getElementsByClassName("cell")[b].classList.add("winning-cell");
            document.getElementsByClassName("cell")[c].classList.add("winning-cell");
            return true;
        }
    }
    return false;
}

// reset
function resetBoard() {
    currentPlayer = "X";
    currentTurn = "X";
    currentTurnElement.innerText = currentTurn;
    gameEnded = false;
    for (let i = 0; i < board.length; i++) {
        board[i] = "";
        document.getElementsByClassName("cell")[i].innerText = "";
    }

    clearWinningCells();
}
currentTurn = "X";
currentTurnElement.innerText = currentTurn;
resetBoard();





// clearWinningCells
function clearWinningCells() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {

        cells[i].classList.remove("winning-cell");
    }
}

