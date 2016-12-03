module.exports = input => input.map(s => s.split` `.map(d => +d)).reduce((p, v, i) => {
    i % 3 === 0 && p.push([], [], [])
    let s = (i / 3 >> 0) * 3
    return p[s].push(v[0]) && p[s + 1].push(v[1]) && p[s + 2].push(v[2]) && p
}, []).filter(e => e[0] + e[1] > e[2] && e[1] + e[2] > e[0] && e[2] + e[0] > e[1]).length
