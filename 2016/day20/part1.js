const _ = require('lodash')

module.exports = (input, part2 = false) => {
    let ranges = input
        .map(str => str.split('-').map(i => +i))
        .map(a => ({low: a[0], high: a[1]}))

    let bad = 0
    while (bad < ranges.length) {
        let a = ranges.shift()
        let b = ranges.find(b => a.low <= b.low && a.high >= b.low - 1)

        if (b) {
            _.pull(ranges, b)
            ranges.push({low: Math.min(a.low, b.low), high: Math.max(a.high, b.high)})
            bad = 0
        } else {
            ranges.push(a)
            bad++
        }
    }
    ranges = _.sortBy(ranges, 'low')

    if (part2) {
        return ranges.reduce((p, v) => {
                p.value += v.low - p.high - 1
                p.high = v.high
                return p
            }, {high: 0, value: 0}).value + 1
    }

    return ranges[0].high + 1
}
