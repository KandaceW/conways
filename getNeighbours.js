const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {
    var neighboursArr = []
    for(var i = -1; i <= 1 ; i++){
        for (var j = -1; j <= 1 ; j++){
            if(i===0  && j===0) continue
            if(!indicesAreOutOfBounds(cellRow + i, cellColumn + j, board)){
                neighboursArr.push(board[cellRow + i][cellColumn + j])
            }
        }
    }
    return neighboursArr
}

module.exports = getNeighbours

