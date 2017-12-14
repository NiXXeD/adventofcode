module.exports = input => {
    const knotHash = require('../day10/part2')
    let hd = [...Array(128)]
        .map((k, i) => knotHash(`${input}-${i}`))
        .map(hash => hash.split``.map(hex => parseInt(hex, 16).toString(2).padStart(4, '0')).join``.split``)

    const check = (x, y) => hd[y] && hd[y][x] === '1'

    const findNew = () => {
        for (let y = 0; y < 128; y++) {
            for (let x = 0; x < 128; x++) {
                if (check(x, y)) return {x, y}
            }
        }
    }
    
    let xy, groups = 0
    while (xy = findNew()) {
        groups++

        let queue = [xy]
        while (queue.length) {
            let {x, y} = queue.pop()
            hd[y][x] = 'X'
            if (check(x + 1, y)) queue.push({x: x + 1, y})
            if (check(x - 1, y)) queue.push({x: x - 1, y})
            if (check(x, y + 1)) queue.push({x, y: y + 1})
            if (check(x, y - 1)) queue.push({x, y: y - 1})
        }
    }

    return groups
}
