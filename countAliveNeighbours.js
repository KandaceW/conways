const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
  let countAlive = 0
  let nbrs = getNeighbours(cellRow, cellColumn, board)
  for (let i = 0; i < nbrs.length; i++) {
    if (nbrs[i]===true) {
      countAlive++
    }
  } return countAlive
}

module.exports = countAliveNeighbours
