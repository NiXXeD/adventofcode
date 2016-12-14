module.exports = input => {
    let visited = [], moves = [{x: 1, y: 1, m: 0}], test = (x, y, m) => {
        if (x < 0 || y < 0) return false
        let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + (+input)
        let result = (wat.toString(2).split``.reduce((p, v) => +v + p, 0) % 2 === 0) &&
            !visited.find(l => l.x === x && l.y === y) && !moves.find(l => l.x === x && l.y === y)
        if (result && m < 50) moves.unshift({x, y, m: m + 1})
    }

    while (moves.length) {
        let {x, y, m} = moves.pop()
        visited.push({x, y})
        test(x + 1, y, m) || test(x, y + 1, m) || test(x - 1, y, m) || test(x, y - 1, m)
    }

    return visited.length
}
