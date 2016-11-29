module.exports = (input, win = 999) => {
    var store = require('./store'), boss = input.join``.match(/\d+/g), _ = require('lodash')
    return _.flattenDeep(store.weapons.map(w => store.armor.map(a => store.rings.map(r1 =>
        store.rings.map(r2 => ({w, a, r1, r2})))))).filter(s => s.r1.id !== s.r2.id)
        .map(s => ({
            cost: s.w.cost + s.a.cost + s.r1.cost + s.r2.cost,
            win: 100 / Math.max(1, boss[1] - (s.a.ar + s.r1.ar + s.r2.ar)) >> 0 >=
            boss[0] / Math.max(1, (s.w.dmg + s.r1.dmg + s.r2.dmg) - boss[2]) >> 0
        })).filter(a => a.win === !!win)
        .reduce((r, v) => Math[win ? 'min' : 'max'](v.cost, r), win)
}
