module.exports = input => input.map(s => s.match(/(\d+)/g).map(a => +a))
    .reduce((grid, [, l, t, w, h]) => {
        for (let x = l; x < l + w; x++) {
            for (let y = t; y < t + h; y++) {
                grid[y][x]++
            }
        }
        return grid
    }, [...Array(1000)].map(() => [...Array(1000)].map(() => 0)))
    .reduce((a, b) => a + b.reduce((c, d) => c + (d > 1 ? 1 : 0), 0), 0)
