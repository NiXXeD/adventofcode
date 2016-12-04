module.exports = input => input.map(s => s.split` `.map(d => +d)).reduce((p, v, i) => (i % 3 === 0 ? p.push([], [], []) : 1)
&& p[s = (i / 3 >> 0) * 3].push(v[0]) && p[++s].push(v[1]) && p[++s].push(v[2]) && p, []).filter(e => e[0] + e[1] > e[2] &&
e[1] + e[2] > e[0] && e[2] + e[0] > e[1]).length
