module.exports = input => {
    let goalX = 31, goalY = 39
    let test = (x, y) => {
        if (x > goalX + 10 || x < 0 || y < 0 || y > goalY + 10) return false
        let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + (+input)
        return wat.toString(2).split``.reduce((p, v) => +v + p, 0) % 2 === 0
    }

    let visited = []
    let moves = [{x: 1, y: 1, m: 0}]
    let find = (x, y, m) => visited.find(loc => loc.x === x && loc.y === y && loc.m <= m)
    while (moves.length) {
        let {x, y, m} = moves.pop()
        visited.push({x, y, m})
        if (test(x + 1, y) && !find(x + 1, y, m + 1))
            moves.push({x: x + 1, y, m: m + 1})
        if (test(x, y + 1) && !find(x, y + 1, m + 1))
            moves.push({x, y: y + 1, m: m + 1})
        if (test(x - 1, y) && !find(x - 1, y, m + 1))
            moves.push({x: x - 1, y, m: m + 1})
        if (test(x, y - 1) && !find(x, y - 1, m + 1))
            moves.push({x, y: y - 1, m: m + 1})
    }

    return visited.filter(v => v.x === goalX && v.y === goalY).slice(-1)[0].m
}
