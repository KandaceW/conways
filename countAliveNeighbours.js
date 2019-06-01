const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
    var neighbours = getNeighbours(cellRow, cellColumn, board)
    var count = 0
    neighbours.forEach(element => {
        if(element){
            count++
        }
    });
    return count
}

module.exports = countAliveNeighbours
