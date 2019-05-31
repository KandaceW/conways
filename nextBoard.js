const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
    return currentBoard.map((row, r) => {
        return row.map((cell, c) => {
            return nextCellState(cell, countAliveNeighbours(r, c, currentBoard))
        })
    })
}

module.exports = nextBoard
