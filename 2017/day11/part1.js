module.exports = input => {
    let {x, y, z} = input.split`,`.reduce(({x, y, z}, val) => {
        if (val === 'n') return {x, y: y + 1, z: z - 1}
        else if (val === 'ne') return {x: x + 1, y, z: z - 1}
        else if (val === 'se') return {x: x + 1, y: y - 1, z}
        else if (val === 's') return {x, y: y - 1, z: z + 1}
        else if (val === 'sw') return {x: x - 1, y, z: z + 1}
        else if (val === 'nw') return {x: x - 1, y: y + 1, z}
    }, {x: 0, y: 0, z: 0})
    return (Math.abs(x) + Math.abs(y) + Math.abs(z)) / 2
}
