module.exports = input => {
    let map = input.map(str => str.split``)
    let x = Math.floor(map.length / 2), y = x, dx = 0, dy = -1, newInfections = 0
    const checkGrowth = () => {
        if (x < 0) {
            map.forEach(row => row.unshift('.'))
            x = 0
        } else if (y < 0) {
            map.unshift('.'.repeat(map[0].length).split``)
            y = 0
        } else if (x >= map[0].length) {
            map.forEach(row => row.push('.'))
        } else if (y >= map.length) {
            map.push('.'.repeat(map[0].length).split``)
        }
    }

    for (let i = 0; i < 1E4; i++) {
        // console.log(x, y, map[y])
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
        checkGrowth()
    }

    return newInfections
}
