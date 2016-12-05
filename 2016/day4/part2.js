const _ = require('lodash')
module.exports = input => {
    return input
        .map(s => s.match(/(.+?)-(\d+)\[(.+?)]/))
        .map(v => ({name: v[1].replace(/-/g, '').split``, sector: +v[2]}))
        .map(v => _.merge(v, {real: v.name.map(l => String.fromCharCode((((l.charCodeAt(0) - 97) + v.sector) % 26) + 97)).join``}))
        .find(v => v.real === 'northpoleobjectstorage').sector
}
