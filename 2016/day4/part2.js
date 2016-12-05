const _ = require('lodash')
const alpha = 'abcdefghijklmnopqrstuvwxyz'
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
        .map(v => _.merge(v, {
            real: v.name.split``.map(l => (l === '-') ? ' ' : alpha[(_.indexOf(alpha, l) + v.sector) % 26]).join``
        }))
        .find(v => v.real === 'northpole object storage').sector
}
