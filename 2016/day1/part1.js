module.exports = i => i.split`, `.map(s => ([{R: i => ([i[1], -i[0]]), L: i => ([-i[1], i[0]])}[s[0]], +s.slice(1)]))
    .reduce((p, v) => ([v[0](p[0]), p[1] + (v[0](p[0])[0] * v[1]), p[2] + (v[0](p[0])[1] * v[1])]), [[0, 1], 0, 0])
    .reduce((p, v, i) => !!i ? p + Math.abs(v) : 0, 0)
