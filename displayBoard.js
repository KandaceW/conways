const createBoard = require('./createBoard')
function displayBoard (board) {
  // eslint-disable-next-line no-console
  var clear = require('clear')
  clear()
  for(var i = 0; i<board.length; i++){
    console.log(board[i])
  }
}

module.exports = displayBoard
