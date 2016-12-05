module.exports = i => i.map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
    .map(v => ({
        sector: +v[2],
        checksum: v[3].split``,
        chars: require('lodash')(v[1].replace(/-/g, ''))
            .countBy()
            .map((n, c) => ({c, n}))
            .orderBy(['n', 'c'], ['desc', 'asc'])
            .take(5)
            .map('c')
            .value()
    }))
    .filter(v => v.checksum.every(l => v.chars.includes(l)))
    .reduce((p, v) => p + v.sector, 0)
