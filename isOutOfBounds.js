function isOutOfBounds (index, array) {
  //for square domain only
  if (index < 0 || index >= array.length) {
    return true
  } return false
}

module.exports = isOutOfBounds
