module.exports = input => {
    let x = 0, y = 0, dX = 3, dY = 1, trees = 0
    do {
        if (input[y][x] === '#') trees++
        x = (x + dX) % input[0].length
        y += dY
    } while (y < input.length)
    return trees
}
