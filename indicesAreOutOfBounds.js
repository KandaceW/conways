const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
    return isOutOfBounds(columnIndex, array) || isOutOfBounds(rowIndex, array)
}

module.exports = indicesAreOutOfBounds
