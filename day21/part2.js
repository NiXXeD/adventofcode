module.exports = input => {
    var store = require('./store')
    var boss = input.join``.match(/\d+/g)

    return store.weapons.map(w => {
        return store.armor.map(a => {
            return store.rings.map(r1 => {
                return store.rings.map(r2 => ({
                    w, a, r1, r2
                }))
            }).reduce((r, v) => r.concat(v), [])
        }).reduce((r, v) => r.concat(v), [])
    }).reduce((r, v) => r.concat(v), [])
        .filter(s => s.r1.id !== s.r2.id)
        .map(s => ({
            cost: s.w.cost + s.a.cost + s.r1.cost + s.r2.cost,
            dmg: s.w.dmg + s.r1.dmg + s.r2.dmg,
            ar: s.a.ar + s.r1.ar + s.r2.ar
        }))
        .filter(a => 100 / Math.max(1, boss[1] - a.ar) >> 0 < boss[0] / Math.max(1, a.dmg - boss[2]) >> 0)
        .reduce((r, v) => v.cost > r ? v.cost : r, 0)
}
