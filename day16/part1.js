module.exports = input => {
    var c = {children: 3, cats: 7, samoyeds: 2, pomeranians: 3, akitas: 0,
        vizslas: 0, goldfish: 5, trees: 3, cars: 2, perfumes: 1}
    return input.map(s => s.match(/^.+?(\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)$/))
        .map(m => ({no: +m[1], [m[2]]: +m[3], [m[4]]: +m[5], [m[6]]: +m[7]}))
        .filter(s => Object.keys(c).every(k => !s[k] || s[k] === c[k]))[0].no
}
