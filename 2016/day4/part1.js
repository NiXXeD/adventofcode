module.exports = i => i.map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
    .map(([, data, sector, checksum]) => ({
        sector, checksum,
        chars: require('lodash')(data.replace(/-/g, ''))
            .countBy()
            .map((n, c) => ({c, n}))
            .orderBy(['n', 'c'], ['desc', 'asc'])
            .take(5)
            .map('c')
            .join``
    }))
    .filter(v => v.checksum === v.chars)
    .reduce((p, v) => p + +v.sector, 0)
