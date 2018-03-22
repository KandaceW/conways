const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

const size = 10
const refreshInteral = 200

let board = createBoard(size)

board = spawnRandom(board)

function spawnRandom (board) {
  const newBoard = [...board] // Whaaaat is that mojo?

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      newBoard[i][j] = Boolean(Math.round(Math.random()))
    }
  }
  return newBoard
}

setInterval(() => {
  displayBoard(board)
  board = nextBoard(board)
}, refreshInteral)
