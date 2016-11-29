module.exports = input => {
    var eq = {children: 3, samoyeds: 2, akitas: 0, vizslas: 0, cars: 2, perfumes: 1}
    var gt = {cats: 7, trees: 3}, lt = {pomeranians: 3, goldfish: 5}
    return input.map(s => s.match(/^.+?(\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)$/))
        .map(m => ({no: +m[1], [m[2]]: +m[3], [m[4]]: +m[5], [m[6]]: +m[7]}))
        .filter(s => Object.keys(eq).every(k => s[k] === undefined || s[k] === eq[k]))
        .filter(s => Object.keys(gt).every(k => s[k] === undefined || s[k] > gt[k]))
        .filter(s => Object.keys(lt).every(k => s[k] === undefined || s[k] < lt[k]))[0].no
}
