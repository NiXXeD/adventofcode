module.exports = input => {
    var [sr, sc] = input.match(/(\d+)/g).map(Number), i = 1, row = 1, col = 1, v = 20151125
    do v = (col = row === 1 ? 1 : col + 1, (row = row === 1 ? ++i : row - 1, v * 252533 % 33554393))
    while (row !== sr || col !== sc)
    return v
}
