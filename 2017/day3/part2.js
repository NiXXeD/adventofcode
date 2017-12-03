module.exports = input => {
    let v = 1, x = 1, y = 0, cache = {'0,0': 1, '1,0': 1}

    const setValue = () => cache[`${x},${y}`] = getValue(1, 0) + getValue(1, 1) + getValue(0, 1) +
        getValue(-1, 1) + getValue(-1, 0) + getValue(-1, -1) + getValue(0, -1) + getValue(1, -1)

    const getValue = (dx, dy) => cache[`${x + dx},${y + dy}`] || 0

    while (v < input) {
        if (getValue(-1, 0) && !getValue(0, 1)) y++
        else if (getValue(0, -1) && !getValue(-1, 0)) x--
        else if (getValue(1, 0) && !getValue(0, -1)) y--
        else if (getValue(0, 1) && !getValue(1, 0)) x++

        v = setValue()
    }

    return v
}
