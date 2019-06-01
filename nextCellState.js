const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
  //is alive
  return cellState
    ? !isOverPopulated(neighbourCount) && !isUnderPopulated(neighbourCount)
    : isRessurectable(neighbourCount)
}

module.exports = nextCellState
