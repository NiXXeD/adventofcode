var _ = require('lodash')

module.exports = i => {
    var stuff = i.map(s => s.match(/^(\w+).+?(\w+)\s(\d+).+?(\w+).$/))

    var people = _.uniq(stuff.map(s => s[1]))

    stuff = stuff.reduce((r, v) => {
        r[`${v[1]},${v[4]}`] = v[2] === 'lose' ? 0 - +v[3] : +v[3]
        return r
    }, {})

    var permutations = require('js-combinatorics').permutation(people).map(p => p.map(s => ({name: s})))

    return _.max(permutations.map(a => {
        return a.map((p, k, a) => {
            var prev = !k ? a[7] : a[k-1]
            var next = k === 7 ? a[0] : a[k+1]

            p.happiness = stuff[`${p.name},${prev.name}`] + stuff[`${p.name},${next.name}`]
            return p
        }).reduce((r, v) => r + v.happiness, 0)
    }))
}
