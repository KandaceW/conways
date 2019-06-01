const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState(cellState, neighbourCount) {
    if (cellState) {
        if(neighbourCount == 3|| neighbourCount == 2){
            return true
        }else if (isOverPopulated(neighbourCount)) {
            return false
        } else if (isUnderPopulated(neighbourCount)) {
            return false
        }
    } else {
        if (isRessurectable(neighbourCount)) {
            return true
        } else {
            return false
        }
    }
}

module.exports = nextCellState
