function isOutOfBounds(index, array) {
    if (typeof array[index] === "undefined"){
        return true
    }else {
        return false
    }
}

module.exports = isOutOfBounds
