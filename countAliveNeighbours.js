const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
    return getNeighbours(cellRow, cellColumn, board).filter(n => n).length
    // return getNeighbours(cellRow, cellColumn, board).reduce((total, current) => {
    //     if(current) total++
    // }, 0)
}

module.exports = countAliveNeighbours
