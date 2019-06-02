function isOverPopulated (neighbourCount) {
    if (neighbourCount > 3) {
        return true
    } else {
        return false
    }
}

module.exports = isOverPopulated
