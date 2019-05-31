var clear = require('clear');

function displayBoard (board) {
  clear();
  console.log(board.map(row => row.map(cell => cell ? "0" : '-').join(" ")).join('\n'))
}

module.exports = displayBoard
