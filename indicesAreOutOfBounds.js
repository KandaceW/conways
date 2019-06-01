const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
    if(!isOutOfBounds(rowIndex, array)&& !isOutOfBounds(columnIndex, array)){
        return false
    }else{
        return true
    }
}

module.exports = indicesAreOutOfBounds
