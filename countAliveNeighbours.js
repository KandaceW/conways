const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
    let count = 0;
    let neighbourArr = getNeighbours(cellRow, cellColumn, board)
    neighbourArr.forEach(element => {
        if (element) {
            count++
        }
    });
    return count;
}

module.exports = countAliveNeighbours
