const _ = require('lodash')
module.exports = i => i.split`, `.map(s => ([{R: i => ([i[1], -i[0]]), L: i => ([-i[1], i[0]])}[s[0]], +s.slice(1)]))
    .reduce((p, v) => {
        let n = [v[0](p[0]), p[1] + (v[0](p[0])[0] * v[1]), p[2] + (v[0](p[0])[1] * v[1]), p[3], p[4]]
        if (!n[4]) _.range(v[1]).forEach(i => {
            let x = p[1] + (n[0][0] * i), y = p[2] + (n[0][1] * i), loc = `${x},${y}`
            if (n[3][loc]) n[4] = [x, y]
            else n[3][loc] = 1
        })
        return n
    }, [[0, 1], 0, 0, {}, null])[4].reduce((p, v) => p + Math.abs(v), 0)
