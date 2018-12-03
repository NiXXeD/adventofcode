module.exports = input => input.map(s => s.match(/(\d+)/g).map(a => +a))
    .reduce(([grid, it], [c, l, t, w, h]) => {
        let overlap = false
        for (let x = l; x < l + w; x++) {
            for (let y = t; y < t + h; y++) {
                if (grid[y][x] > 0) {
                    it[grid[y][x]] = 0
                    overlap = true
                }
                grid[y][x] = c
            }
        }
        if (!overlap) it[c] = 1
        return [grid, it]
    }, [[...Array(1000)].map(() => [...Array(1000)].map(() => 0)), []])
    [1].indexOf(1)
