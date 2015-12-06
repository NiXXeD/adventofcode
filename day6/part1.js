module.exports = input => {
    var grid = input.map(s => /(.+?)\s(\d+),(\d+).+?(\d+),(\d+)/g.exec(s))
        .reduce((g, a) => {
            for (var x = +a[2]; x <= +a[4]; x++)
                for (var y = +a[3]; y <= +a[5]; y++)
                    g[`${x},${y}`] = a[1] === 'toggle' ? +!g[`${x},${y}`] : +(a[1] === 'turn on')
            return g
        }, {})
    return Object.keys(grid).reduce((r, v) => r + grid[v], 0)
}
