module.exports = input => {
    var start = require('fs').readFileSync('./2015/day19/start', 'utf8').trimRight()
    var out = new Set()

    var swap = input.map(a => a.match(/(.+)\s=>\s(.+)/)).map(a => ({k: a[1], v: a[2]}))

    swap.forEach(e => {
        var index = -1
        do {
            index = start.indexOf(e.k, index + 1)
            if (index >= 0) {
                var result = start.substr(0, index) + e.v + start.substr(index + e.k.length)
                out.add(result)
            }
        } while (index >= 0)
    })

    return out.size
}
