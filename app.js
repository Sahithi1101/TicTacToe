let headerText = document.getElementById(`.Title`)
let cells = document.querySelectorAll(`.cell`)
const restartbtn =document.getElementById(`.restartbtn`)

const player1 = "x"
const player2 = "O"
let currentPlayer = "X"

let winnercomb = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]
