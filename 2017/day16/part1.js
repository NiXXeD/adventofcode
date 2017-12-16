module.exports = input => solve(input)('abcdefghijklmnop')
module.exports.solve = solve

function solve(input) {
    let moves = input.split`,`.map(str => str.match(/(.)(\w+)\/?(\w+)?/))
    return str => moves.reduce((acc, vals) => {
        if (vals[1] === 's') {
            return acc.splice(0 - +vals[2]).concat(acc)
        } else if (vals[1] === 'x') {
            let a = acc[+vals[2]]
            acc[+vals[2]] = acc[+vals[3]]
            acc[+vals[3]] = a
            return acc
        } else if (vals[1] === 'p') {
            let a = acc.findIndex(s => s === vals[2])
            let b = acc.findIndex(s => s === vals[3])
            let t = acc[a]
            acc[a] = acc[b]
            acc[b] = t
            return acc
        }
    }, str.split``).join``
}
