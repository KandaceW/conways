const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours(cellRow, cellColumn, board) {

  // let newArr = []

  // let testArr = [
  //   indicesAreOutOfBounds([cellRow - 1], [cellColumn - 1], board),
  //   indicesAreOutOfBounds([cellRow - 1], [cellColumn], board),
  //   indicesAreOutOfBounds([cellRow - 1], [cellColumn + 1], board),
  //   indicesAreOutOfBounds([cellRow], [cellColumn - 1], board),
  //   indicesAreOutOfBounds([cellRow], [cellColumn + 1], board),
  //   indicesAreOutOfBounds([cellRow + 1], [cellColumn - 1], board),
  //   indicesAreOutOfBounds([cellRow + 1], [cellColumn], board),
  //   indicesAreOutOfBounds([cellRow + 1], [cellColumn + 1], board),
  // ]

  // let answerArr = [
  //   board[cellRow-1][cellColumn-1],
  //   board[cellRow-1][cellColumn],
  //   board[cellRow-1][cellColumn+1],
  //   board[cellRow][cellColumn-1],
  //   board[cellRow][cellColumn+1],
  //   board[cellRow+1][cellColumn-1],
  //   board[cellRow+1][cellColumn],
  //   board[cellRow+1][cellColumn+1]
  // ]

  // console.log(testArr)

  // testArr.forEach(function (cell, index) {
  //   if (!cell) { newArr.push(answerArr[index]) }
  // })

  // console.log('final array', newArr)
  // return newArr
  let arr = []

  // Fo all the cells around the chosen cell
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {

      let missing = indicesAreOutOfBounds(cellRow + i, cellColumn + j, board)
      let chosenCell = board[cellRow][cellColumn]

      if (j === 0 && i === 0) continue
      if (!missing){ arr.push(board[cellRow + i][cellColumn + j]) }

    }
  }

  console.log(arr)
  return arr

  // Filter out of bounds
  // Ignore board[cellRow][cellColumn]


}

module.exports = getNeighbours
