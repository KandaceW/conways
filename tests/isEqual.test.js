const isEqual = require('../index').isEqual
const createBoard = require('../createBoard')

test('isEqual can evaluate simple equality', () => {
    const board = createBoard(10)
    expect(isEqual(board, board)).toBeTruthy()
})

test('isEqual can evaluate simple inequality', () => {
    const board1 = [[0,0],[0,0]]
    const board2 = [[1,0],[0,0]]

    expect(isEqual(board1, board2)).toBeFalsy()
})
