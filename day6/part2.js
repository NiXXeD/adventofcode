module.exports = input => {
    var grid = input.map(s => /(.+?)\s(\d+),(\d+).+?(\d+),(\d+)/g.exec(s))
        .reduce((g, a) => {
            var val = a[1] === 'turn on' ? 1 : a[1] === 'turn off' ? -1 : 2
            for (var x = +a[2]; x <= +a[4]; x++)
                for (var y = +a[3]; y <= +a[5]; y++)
                    g[`${x},${y}`] = Math.max((g[`${x},${y}`] || 0) + val, 0)
            return g
        }, {})
    return Object.keys(grid).reduce((r, v) => r + grid[v], 0)
}
