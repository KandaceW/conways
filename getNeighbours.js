const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {

  let nbrs = []
  for (var row = -1; row <= 1; row++) {
    for (var col = -1; col <= 1; col++) {
      if (row === 0 && col === 0) continue
      if (!indicesAreOutOfBounds(cellRow + row, cellColumn + col, board)) {
        nbrs.push(board[cellRow + row][cellColumn + col])
      }
    }
}
  return nbrs
}

module.exports = getNeighbours
