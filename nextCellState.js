const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
  return cellState
    ? !isOverPopulated(neighbourCount) && !isUnderPopulated(neighbourCount)
    : isRessurectable(neighbourCount)
}

module.exports = nextCellState
