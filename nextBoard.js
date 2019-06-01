const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
  let nextBoard = []
  for (var i = 0, l=currentBoard.length; i < l; i++) {
    let nextRow=[]
    for (var j = 0; j < l; j++) {
      let aliveNeighbours = countAliveNeighbours(i, j, currentBoard)
      let currentCellState = currentBoard[i][j]
      nextRow.push(nextCellState(currentCellState, aliveNeighbours))
    }
    nextBoard.push(nextRow)
  }
  return nextBoard
}

module.exports = nextBoard
