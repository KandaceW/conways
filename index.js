const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

const size = 20
const refreshInterval = 200

let board = createBoard(size)

setInterval(() => {
  displayBoard(board)
  board = nextBoard(board)
}, refreshInterval)
