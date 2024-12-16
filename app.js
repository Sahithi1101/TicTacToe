let headerText = document.getElementById("Title");
let cells = document.getElementsByClassName("cell");
cells = Array.from(cells);
let restartBtn = document.getElementById("restartbtn");
let winText = document.getElementById("winmessage");
let winner = getComputedStyle(document.body).getPropertyValue('--winningCells')
// console.log(cells)

const player1 = "x"
const player2 = "O"
let currentPlayer = player1
let spaces = Array(9).fill(null)
// console.log(spaces)

const startGame = () => {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
}

function cellClicked(a) {
    const id = a.target.id
   
    if (!spaces[id]){
         spaces[id] = currentPlayer
        a.target.innerText = currentPlayer

        if(playerWon()  !==false){
            winText.innerHTML= `${currentPlayer} has won`;
        // } else if (spaces.every(space => space !==null)){
        //     winText.innerHTML = "It's a tie";
        }
            let winnigCells = playerWon()

            winnigCells.map(cell =>cells[cell].computedStyleMap.backgroundColor=winner)

            console.log(winnigCells);
        }

        currentPlayer = currentPlayer == player1 ? player2 : player1
}


const winnerCond = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

function playerWon() {
    for (const condition of winnerCond) {
        let [a,b,c] = condition;

        if(spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]){
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart);

function restart() {
    spaces.fill(null);

    cells.forEach( cell => {
        cell.innerText = '';
    });
    headerText = 'TIC TAC TOE'
    currentPlayer = player1
}

startGame();