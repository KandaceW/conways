const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
  return currentBoard.map((row, i) => {
    return row.map((cell, j) => {
      const count = countAliveNeighbours(i, j, currentBoard)
      return nextCellState(cell, count)
    })
  })
}

module.exports = nextBoard
