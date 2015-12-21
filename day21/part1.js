module.exports = input => {
    var store = require('./store')
    var boss = input.join``.match(/\d+/g)

    return store.weapons.map(w => {
        return store.armor.map(a => {
            return store.rings.map(r1 => {
                return store.rings.map(r2 => ({
                    cost: w.cost + a.cost + r1.cost + r2.cost,
                    dmg: w.dmg + r1.dmg + r2.dmg,
                    ar: a.ar + r1.ar + r2.ar
                }))
            }).reduce((r, v) => r.concat(v), [])
        }).reduce((r, v) => r.concat(v), [])
    }).reduce((r, v) => r.concat(v), [])
        .filter(a => 100 / Math.max(1, boss[1] - a.ar) >> 0 >= boss[0] / Math.max(1, a.dmg - boss[2]) >> 0)
        .reduce((r, v) => v.cost < r ? v.cost : r, 999)
}
