let headerText = document.getElementById("Title");
let cells = document.getElementsByClassName("cell");
cells = Array.from(cells);
const restartbtn = document.getElementById("restartbtn");
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

        if (currentPlayer === player1) {
            currentPlayer = player2; 
         } else{
            currentPlayer = player1
         }
    }
}
startGame();