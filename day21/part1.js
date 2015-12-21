module.exports = input => {
    var store = require('./store')
    var boss = input.join``.match(/\d+/g)

    return require('lodash').flattenDeep(store.weapons.map(w => store.armor.map(a => store.rings.map(r1 =>
        store.rings.map(r2 => ({
            cost: w.cost + a.cost + r1.cost + r2.cost,
            dmg: w.dmg + r1.dmg + r2.dmg,
            ar: a.ar + r1.ar + r2.ar
        })))))).filter(a => 100 / Math.max(1, boss[1] - a.ar) >> 0 >= boss[0] / Math.max(1, a.dmg - boss[2]) >> 0)
        .reduce((r, v) => v.cost < r ? v.cost : r, 999)
}
