module.exports = input => {
    var [sr, sc] = input.match(/(\d+)/g).map(Number).map(n => n - 1)
    var row = 1, col = 0, i = 20151125, grid = [[i]]
    while (!grid[sr] || !grid[sr][sc]) {
        if (!grid[row]) grid.push([])
        i = (i * 252533) % 33554393
        grid[row].push(i)

        if (row === 0) {
            row = grid.length
            col = 0
        } else {
            row--
            col++
        }
    }
    return grid[sr][sc]
}
