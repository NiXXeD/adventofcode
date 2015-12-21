module.exports = input => {
    var original = require('fs').readFileSync('./day19/start', 'utf8').trimRight()

    var swap = input.map(a => a.match(/(.+)\s=>\s(.+)/))
        .map(a => ({k: a[1], v: a[2]}))

    let steps = 0
    var val = original
    while (val.length > 1) {
        for (let i = 0; i < swap.length; i++) {
            let e = swap[i]
            if (val.includes(e.v)) {
                val = val.replace(e.v, e.k)
                steps++
            }
        }
    }

    return steps
}
