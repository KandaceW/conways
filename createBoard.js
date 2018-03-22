function createBoard (size) {
  return Array(size)
    .fill(0)
    .map(() => Array(size).fill(false))
}

module.exports = createBoard
