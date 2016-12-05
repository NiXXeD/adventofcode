const _ = require('lodash')
module.exports = input => {
    return input
        .map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
        .map(v => ({
            name: v[1],
            sector: +v[2],
            checksum: v[3],
            chars: _(_.countBy(v[1].replace(/-/g, '').split``))
                .map((n, c) => ({c, n}))
                .orderBy(['n', 'c'], ['desc', 'asc'])
                .take(5)
                .map('c')
                .value()
        }))
        .filter(v => v.checksum.split``.every(l => v.chars.includes(l)))
        .reduce((p, v) => p + v.sector, 0)
}
