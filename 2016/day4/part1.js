module.exports = i => i.map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
    .map(v => ({
        sector: +v[2],
        checksum: v[3],
        chars: require('lodash')(v[1].replace(/-/g, ''))
            .countBy()
            .map((n, c) => ({c, n}))
            .orderBy(['n', 'c'], ['desc', 'asc'])
            .take(5)
            .map('c')
            .join``
    }))
    .filter(v => v.checksum === v.chars)
    .reduce((p, v) => p + v.sector, 0)
