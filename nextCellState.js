const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
    if (isOverPopulated(neighbourCount)) {
        return cellState = false;
    } else if (isUnderPopulated(neighbourCount)) {
        return cellState = false;
    } else if (isRessurectable(neighbourCount)) {
        return cellState = true
    } else {
        return true;
    }
}


module.exports = nextCellState
