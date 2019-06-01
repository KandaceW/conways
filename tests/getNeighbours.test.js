const getNeighbours = require('../getNeighbours')
const createBoard = require('../createBoard.js')

test('getNeighbours in corner', () => {
  const board = createBoard(10)
  board[0][0] = 1000000
  board[0][1] = 3
  board[1][0] = 5
  board[1][1] = 11
  const expected = 19

  const neighbours = getNeighbours(0, 0, board)
  const actual = neighbours.reduce((sum, val) => (sum + val), 0)

  expect(actual).toBe(expected)
})

test('getNeighbours in center', () => {
  const board = createBoard(10)
  for (var i = 0; i < board.length; i++){
    for (var j = 0; j < board.length; j++){
      board[i][j] = 1
    }
  }
  const expected = 8

  const neighbours = getNeighbours(1, 1, board)
  const actual = neighbours.reduce((sum, val) => (sum + val), 0)

  expect(actual).toBe(expected)
})


test('getNeighbours in corner', () => {
  const board = createBoard(10)
  for (var i = 0; i < board.length; i++){
    for (var j = 0; j < board.length; j++){
      board[i][j] = 1
    }
  }
  const expected = 5

  const neighbours = getNeighbours(0, 1, board)
  const actual = neighbours.reduce((sum, val) => (sum + val), 0)

  expect(actual).toBe(expected)
})
