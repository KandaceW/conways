const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

const size = 50
const refreshInterval = 500

let board = createBoard(size)
let history = []

setInterval(() => {
  displayBoard(board)
  if (stasis(board)) {
    board = createBoard(size)
  } else {
    board = nextBoard(board)
  }
}, refreshInterval)

function stasis (newBoard) {
  if (recentlyExisted(newBoard)) {
    return true
  } else {
    addToRecentHistory(newBoard)
    return false
  }
}

function recentlyExisted(newBoard) {
  if(history.length){
    return history.find(oldBoard => isEqual(newBoard, oldBoard))
  } else {
    return false
  }
}

function addToRecentHistory(newBoard) {
  history.unshift(newBoard)
  if (history.length > 10) {
    history.pop()
  }
}

function isEqual (new2dArr, old2dArr) {
  let allMatching = true
  new2dArr.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell != old2dArr[r][c]) {
        allMatching = false
      }
    })
  });
  return allMatching
}

module.exports = {
  isEqual
}