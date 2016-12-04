const _ = require('lodash')
module.exports = input => {
    return input
        .map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
        .map(v => ({
            name: v[1],
            sector: +v[2],
            checksum: v[3]
        }))
        .map(v => {
            v.chars = blah(v.name)
            v.chars = _.map(_.take(_.sortBy(_.sortBy(v.chars, 'l').reverse(), 'c').reverse(), 5), 'l')
            return v
        })
        .filter(v => v.checksum.split``.every(l => v.chars.includes(l)))
        .map(v => {
            let alpha = 'abcdefghijklmnopqrstuvwxyz'.split``
            v.realname = v.name.split``.map(l => {
                if (l === '-') {
                    return ' '
                } else {
                    let index = (_.indexOf(alpha, l) + v.sector) % 26
                    return alpha[index]
                }
            }).join``
            return v
        })
        .filter(v => _.includes(v.realname, 'north'))[0].sector

    function blah(s) {
        return s.replace(/-/g, '').split``.reduce((p, v) => {
            let b = _.find(p, {l: v}) || (p.push({l: v, c: 1}))
            b.c++
            return p
        }, [])
    }
}
