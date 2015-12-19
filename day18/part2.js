module.exports = input => {
    var c = [-1, 0, 1], t = {1: [2,3], 0: [3]}
    var grid = input.map(s => s.split``.map(t => t === '#' ? 1 : 0))
    var neighbors = (g, x, y) => c.reduce((r, a) => r + c.reduce((r, b) => r + ((g[x+a] || {})[y+b] || 0), 0), 0) - g[x][y]
    var iterate = r => r.map((a, x) => r.map((b, y) => +!!~t[r[x][y]].indexOf(neighbors(r, x, y))))
    var fix = r => {
        r[0][0] = r[0][99] = r[99][0] = r[99][99] = 1
        return r
    }
    return [...Array(100)].reduce(r => fix(iterate(r)), fix(grid)).reduce((r, v) => r + v.reduce((r, v) => r + v, 0), 0)
}
