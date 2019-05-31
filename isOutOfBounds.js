function isOutOfBounds(index, array) {
    console.log(index, array)
    var boundsObj = Object.assign({}, array);
    console.log(typeof array[index])
    console.log(array[index])
    if (typeof array[index] == "undefined"){
        return false
    }else {
        return true
    }
}

module.exports = isOutOfBounds
