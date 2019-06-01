const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

const size = 10
const refreshInteral = 1000

let board = createBoard(size)

board[2][2]=1 
board[2][3]=1 
board[2][4]=1
board[3][1]=1
board[3][2]=1
board[3][3]=1

 


setInterval(() => {
  displayBoard(board)
  board = nextBoard(board)
}, refreshInteral)
