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
//   return currentBoard.map((row, i) => {
//     return row.map((cell, j) => {
//       const count = countAliveNeighbours(i, j, currentBoard)
//       return nextCellState(cell, count)
//     })
// })
}

module.exports = nextBoard
