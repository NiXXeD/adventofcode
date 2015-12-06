var grid = require('fs').readFileSync('input-day6', 'utf-8').trimRight().split('\n')
    .map(s => /(.+?)\s(\d+),(\d+).+?(\d+),(\d+)/g.exec(s))
    .reduce((g, a) => {
        for (var x = +a[2]; x <= +a[4]; x++) {
            for (var y = +a[3]; y <= +a[5]; y++) {
                if (a[1] === 'turn on') {
                    g[`${x},${y}`] = 1
                } else if (a[1] === 'turn off') {
                    g[`${x},${y}`] = 0
                } else if (a[1] === 'toggle') {
                    g[`${x},${y}`] = +!g[`${x},${y}`]
                }
            }
        }
        return g
    }, {})

console.log(Object.keys(grid).reduce((r, v) => r + grid[v], 0))
