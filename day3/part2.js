var s = {x: 0, y: 0}, b = {x: 0, y: 0}
module.exports = input => Object.keys(Array.from(input).reduce((r, v, i) => (w => {
    w.x += {'>': 1, '<': -1}[v] || 0
    w.y += {'^': 1, 'v': -1}[v] || 0
    r[`${w.x},${w.y}`] = 1
    return r
})(i % 2 ? s : b), {'0,0': 1})).length
