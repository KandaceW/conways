const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {
    let neighbours = [
        [cellRow-1, cellColumn-1],
        [cellRow-1, cellColumn],
        [cellRow-1, cellColumn+1],

        [cellRow, cellColumn-1],
        [cellRow, cellColumn+1],

        [cellRow+1, cellColumn-1],
        [cellRow+1, cellColumn],
        [cellRow+1, cellColumn+1],
    ]

    neighbours = neighbours.map(n => {
        let row = n[0]
        let col = n[1]
        if (indicesAreOutOfBounds(row, col, board)){
            return 'out of bounds'
        } else {
            return board[row][col]
        }
    }).filter(n => n != 'out of bounds')

    return neighbours
}

module.exports = getNeighbours
