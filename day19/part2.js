module.exports = input => {
    var val = require('fs').readFileSync('./day19/start', 'utf8').trimRight()

    var count = (r, v) => r + (val.match(new RegExp(v, 'g')) || []).length
    var special = ['Rn', 'Ar', 'Y']
    var elements = Array.from(input.map(a => a.match(/(.+)\s=>\s(.+)/)[1])
        .concat(special)
        .reduce((r, v) => r.add(v), new Set()))
        .reduce(count, 0)

    var parens = special.slice(0, 2)
        .reduce(count, 0)

    var commas = special.slice(2)
        .reduce(count, 0)

    return elements - parens - commas * 2 - 1
}
