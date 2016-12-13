const _ = require('lodash')

module.exports = input => {
    let test = (x, y) => {
        if (x < 0 || y < 0) return false
        let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + (+input)
        return wat.toString(2).split``.reduce((p, v) => +v + p, 0) % 2 === 0
    }

    let visited = []
    let moves = [{x: 1, y: 1, m: 0}]
    while (moves.length) {
        let {x, y, m} = moves.pop()
        visited.push({x, y})

        if (m <= 51) {
            if (test(x + 1, y) && !_.find(visited, {x: x + 1, y}))
                moves.push({x: x + 1, y, m: m + 1})
            if (test(x, y + 1) && !_.find(visited, {x, y: y + 1}))
                moves.push({x, y: y + 1, m: m + 1})
            if (test(x - 1, y) && !_.find(visited, {x: x - 1, y}))
                moves.push({x: x - 1, y, m: m + 1})
            if (test(x, y - 1) && !_.find(visited, {x, y: y - 1}))
                moves.push({x, y: y - 1, m: m + 1})
        }
    }

    return visited.length
}
