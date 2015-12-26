module.exports = input => {
    var [sr, sc] = input.match(/(\d+)/g).map(Number), i = 1, row = 1, col = 1, v = 20151125
    do {
        if (row === 1) {
            row = ++i
            col = 1
        } else {
            row--
            col++
        }
        v = (v * 252533) % 33554393
    } while (row !== sr || col !== sc)
    return v
}
