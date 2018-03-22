/* eslint-disable no-console */

function displayBoard (board) {
  // reset the console
  process.stdout.write('\x1B[2J\x1B[0f')

  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    console.log(row.map(cell => (cell) ? 'o' : '.').join(' '))
  }
  console.log()
}

module.exports = displayBoard
