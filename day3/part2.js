module.exports = input => Object.getOwnPropertyNames(input.split``.reduce((r, v, i) => (w => Object.defineProperty(r,
    `${w.x += {'>': 1, '<': -1}[v] || 0},${w.y += {'^': 1, 'v': -1}[v] || 0}`, {value: 1}))(i % 2 ? r.s : r.b),
    {s: {x: 0, y: 0}, b: {x: 0, y: 0}})).length - 2
