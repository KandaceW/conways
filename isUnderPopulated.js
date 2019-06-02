function isUnderPopulated (neighbourCount) {
    if (neighbourCount < 2) {
        return true
    } else {
        return false
    }
}

module.exports = isUnderPopulated
