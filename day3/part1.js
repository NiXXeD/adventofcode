var s = {x: 0, y: 0}
module.exports = input => Object.keys(Array.from(input).reduce((r, v) => {
    s.x += {'>': 1, '<': -1}[v] || 0
    s.y += {'^': 1, 'v': -1}[v] || 0
    r[`${s.x},${s.y}`] = 1
    return r
}, {'0,0': 1})).length
