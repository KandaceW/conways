const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
    if(isOverPopulated(neighbourCount)){
        return 0
    } else if (isUnderPopulated(neighbourCount)) {
        return 0
    } else if (isRessurectable(neighbourCount)){
        return 1
    } else {
        return cellState
    }
}

module.exports = nextCellState
