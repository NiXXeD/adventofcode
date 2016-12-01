module.exports = input => {
    let pos = input.split(', ')
        .map(s => ({dir: s[0] === 'R' ? 1 : -1, steps: +s.slice(1)}))
        .reduce((p, v) => {
            p.f = (p.f + v.dir)
            if (p.f < 0) p.f = 3
            if (p.f > 3) p.f = 0
            p.x += {0: 0, 1: 1, 2: 0, 3: -1}[p.f] * v.steps
            p.y += {0: 1, 1: 0, 2: -1, 3: 0}[p.f] * v.steps
            return p
        }, {x: 0, y: 0, f: 0})
    return Math.abs(pos.x) + Math.abs(pos.y)
}
