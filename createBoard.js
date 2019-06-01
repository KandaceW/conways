function createBoard (size) {
    //create an array of zeroes size long.
    //create a new array of false size long - (i.e. not one that already exists in memory, for each entry in the array)
    // return Array(size).fill(false)
    //         .map(() => Array(size).fill(false))
    let board = []
    for (var i = 0; i < size; i++) {
        let nextRow=[]
        for (var j = 0; j < size; j++) {
            nextRow.push(Math.random() >= 0.5)
        }
    board.push(nextRow)
  }
  return board
}

module.exports = createBoard
