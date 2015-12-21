module.exports = input => {
    var store = require('./store')
    var boss = input.join``.match(/\d+/g)

    return require('lodash').flattenDeep(store.weapons.map(w => store.armor.map(a => store.rings.map(r1 =>
        store.rings.map(r2 => ({w, a, r1, r2})))))).filter(s => s.r1.id !== s.r2.id)
        .map(s => ({
            cost: s.w.cost + s.a.cost + s.r1.cost + s.r2.cost,
            dmg: s.w.dmg + s.r1.dmg + s.r2.dmg,
            ar: s.a.ar + s.r1.ar + s.r2.ar
        })).filter(a => 100 / Math.max(1, boss[1] - a.ar) >> 0 < boss[0] / Math.max(1, a.dmg - boss[2]) >> 0)
        .reduce((r, v) => v.cost > r ? v.cost : r, 0)
}
