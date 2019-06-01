const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')



function getNeighbours (cellRow, cellColumn, board) {
    
    let neighbourArr = [];

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue
            if (!indicesAreOutOfBounds(cellRow+i, cellColumn+j, board)) {        
                neighbourArr.push(board[cellRow+i][cellColumn+j])
            }
        }
    }
    return neighbourArr;
}


module.exports = getNeighbours

