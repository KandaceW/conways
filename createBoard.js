function createBoard (size) {
    return Array(size).fill([]).map(x => Array(size).fill(randomBool()))
}

function randomBool () {
    return Math.floor(Math.random()*2)
}

module.exports = createBoard
