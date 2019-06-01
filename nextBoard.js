const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')
const createBoard = require('./createBoard')
const displayBoard = require('./displayBoard')

function nextBoard(currentBoard) {
    var nextBoard = createBoard(currentBoard.length);
    for (var i = 0; i < currentBoard.length; i++) {
        for (var j = 0; j < currentBoard.length; j++) {
            if(nextCellState(currentBoard[i][j], countAliveNeighbours(i, j, currentBoard))){
                nextBoard[i][j] = 1
            }else{
                nextBoard[i][j] = 0
            }
            
        }
    }
    return nextBoard;
}

module.exports = nextBoard
