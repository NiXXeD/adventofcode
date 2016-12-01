const _ = require('lodash')

module.exports = input => {
    let pos = input.split(', ')
        .map(s => ({dir: s[0] === 'R' ? 1 : -1, steps: +s.slice(1)}))
        .reduce((p, v) => {
            p.f = (p.f + v.dir)
            if (p.f < 0) p.f = 3
            if (p.f > 3) p.f = 0
            let xD = {0: 0, 1: 1, 2: 0, 3: -1}[p.f]
            let yD = {0: 1, 1: 0, 2: -1, 3: 0}[p.f]

            if (!p.answer) {
                _.range(v.steps)
                    .forEach(i => {
                        let x = p.x + (xD * i)
                        let y = p.y + (yD * i)
                        let loc = `${x},${y}`
                        if (p.history[loc]) {
                            p.answer = {x, y}
                        } else {
                            p.history[loc] = true
                        }
                    })
            }

            p.x += {0: 0, 1: 1, 2: 0, 3: -1}[p.f] * v.steps
            p.y += {0: 1, 1: 0, 2: -1, 3: 0}[p.f] * v.steps
            return p
        }, {x: 0, y: 0, f: 0, history: {}, answer: null})
        .answer

    return Math.abs(pos.x) + Math.abs(pos.y)
}
