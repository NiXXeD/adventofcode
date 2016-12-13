module.exports = input => {
    let test = (x, y) => {
        if (x < 0 || y < 0) return false
        let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + (+input)
        return wat.toString(2).split``.reduce((p, v) => +v + p, 0) % 2 === 0
    }

    let visited = []
    let moves = [{x: 1, y: 1, m: 0}]
    let find = (a, x, y) => a.find(l => l.x === x && l.y === y)
    while (moves.length) {
        let {x, y, m} = moves.pop()
        visited.push({x, y})

        if (m < 50) {
            if (test(x + 1, y) && !find(visited, x + 1, y) && !find(moves, x + 1, y))
                moves.unshift({x: x + 1, y, m: m + 1})
            if (test(x, y + 1) && !find(visited, x, y + 1) && !find(moves, x, y + 1))
                moves.unshift({x, y: y + 1, m: m + 1})
            if (test(x - 1, y) && !find(visited, x - 1, y) && !find(moves, x - 1, y))
                moves.unshift({x: x - 1, y, m: m + 1})
            if (test(x, y - 1) && !find(visited, x, y - 1) && !find(moves, x, y - 1))
                moves.unshift({x, y: y - 1, m: m + 1})
        }
    }

    return visited.length
}
