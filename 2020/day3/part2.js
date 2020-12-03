module.exports = input => {
    const fn = (dX, dY) => {
        let x = 0, y = 0, trees = 0
        do {
            if (input[y][x] === '#') trees++
            x = (x + dX) % input[0].length
            y += dY
        } while (y < input.length)
        return trees
    }
    const a = fn(1, 1), b = fn(3, 1), c = fn(5, 1), d = fn(7, 1), e = fn(1, 2)
    return a * b * c * d * e
}
