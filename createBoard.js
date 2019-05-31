function createBoard(size) {
  var cells = [];
  for (var i = 0; i < size; i++) {
    cells[i] = [];
    for (var j = 0; j < size; j++) {
      cells[i][j] = 0;
    }
  }
  return cells;
}

module.exports = createBoard;
