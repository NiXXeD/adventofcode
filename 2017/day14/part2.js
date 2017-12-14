module.exports = input => {
    let groups = 0, hd = [...Array(128)]
        .map((k, i) => require('../day10/part2')(`${input}-${i}`))
        .map(hash => hash.split``.map(hex => parseInt(hex, 16).toString(2).padStart(4, '0')).join``.split``)

    const check = (x, y) => hd[y] && hd[y][x] === '1'

    const group = (x, y) => {
        hd[y][x] = '0'
        if (check(x + 1, y)) group(x + 1, y)
        if (check(x - 1, y)) group(x - 1, y)
        if (check(x, y + 1)) group(x, y + 1)
        if (check(x, y - 1)) group(x, y - 1)
    }

    for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 128; x++) {
            if (check(x, y)) {
                groups++
                group(x, y)
            }
        }
    }

    return groups
}
