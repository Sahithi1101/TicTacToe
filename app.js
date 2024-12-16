let headerText = document.getElementById("Title");
let cells = document.getElementsByClassName("cell");
cells = Array.from(cells);
const restartBtn = document.getElementById("restartbtn");
let winText = document.getElementById("winmessage")
// console.log(cells)

const player1 = "x"
const player2 = "O"
let currentPlayer = player1
let spaces = Array("","","","","","","","","")
// console.log(spaces)

const startGame = ()=> {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
}

function cellClicked(cellclick) {
    const id = cellclick.target.id
   
    if (!spaces[id]){
        spaces[id] = currentPlayer
        cellclick.target.innerText = currentPlayer

        if(playerWon()){
            winText = `${currentPlayer} has won`
        }

        if (currentPlayer === player1) {
            currentPlayer = player2; 
         } else{
            currentPlayer = player1
         }
    }
}
restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    cells.forEach( cell => {
        cell.innerText = ''
    })
    currentPlayer = player1
}

startGame();