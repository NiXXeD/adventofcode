module.exports = input => {
    const move = (x, y, z, max) => ({x, y, z, max: Math.max(max, (Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2)})
    return input.split`,`.reduce(({x, y, z, max}, val) => {
        if (val === 'n') return move(x, y + 1, z - 1, max)
        else if (val === 'ne') return move(x + 1, y, z - 1, max)
        else if (val === 'se') return move(x + 1, y - 1, z, max)
        else if (val === 's') return move(x, y - 1, z + 1, max)
        else if (val === 'sw') return move(x - 1, y, z + 1, max)
        else if (val === 'nw') return move(x - 1, y + 1, z, max)
    }, {x: 0, y: 0, z: 0, max: 0}).max
}
