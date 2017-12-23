module.exports = input => {
    let map = input.map(str => str.split``)
    let x = Math.floor(map.length / 2), y = x, dx = 0, dy = -1, newInfections = 0
    const grow = () => {
        if (x < 0) [x, y] = [0, y + 1]
        else if (y < 0) [x, y] = [x + 1, 0]
        else [x, y] = [x + 1, y + 1]
        map = [
            '.'.repeat(map.length + 2).split``,
            ...map.map(row => `.${row.join``}.`.split``),
            '.'.repeat(map.length + 2).split``
        ]
    }

    for (let i = 0; i < 1E4; i++) {
        let current = map[y][x]
        if (current === '.') {
            newInfections++
            map[y][x] = '#'

            // turn left
            if (dy < 0) [dx, dy] = [-1, 0]
            else if (dy > 0) [dx, dy] = [1, 0]
            else if (dx < 0) [dx, dy] = [0, 1]
            else if (dx > 0) [dx, dy] = [0, -1]
        } else {
            map[y][x] = '.'

            // turn right
            if (dy < 0) [dx, dy] = [1, 0]
            else if (dy > 0) [dx, dy] = [-1, 0]
            else if (dx < 0) [dx, dy] = [0, -1]
            else if (dx > 0) [dx, dy] = [0, 1]
        }

        // move
        x += dx
        y += dy
        if (x >= map.length || y >= map.length || x < 0 || y < 0) grow()
    }

    return newInfections
}
