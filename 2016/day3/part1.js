module.exports = i => i.map(s => s.split` `.map(d => +d)).filter(e => e[0] + e[1] > e[2] && e[1] + e[2] > e[0] && e[2] + e[0] > e[1]).length
