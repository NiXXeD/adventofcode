module.exports = i => i.split(', ')
    .map(s => ({r: {R: 1, L: -1}[s[0]], s: +s.slice(1)}))
    .reduce((p, v) => {
        let f = (p[0] + v.r + 4) % 4
        return [f, p[1] + {0: 0, 1: 1, 2: 0, 3: -1}[f] * v.s, p[2] + {0: 1, 1: 0, 2: -1, 3: 0}[f] * v.s]
    }, [0, 0, 0])
    .reduce((p, v, i) => !!i ? p + Math.abs(v) : 0, 0)
