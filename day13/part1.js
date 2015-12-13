module.exports = i => {
    i = i.map(s => s.match(/^(\w+).+?(\w+)\s(\d+).+?(\w+).$/)).reduce((r, v) => {
        r.keys[v[1]] = 1
        r[`${v[1]},${v[4]}`] = v[2] === 'lose' ? 0 - +v[3] : +v[3]
        return r
    }, {keys: {}})
    return require('js-combinatorics').permutation(Object.keys(i.keys)).map(a =>
        a.map((p, k, a) => (i[`${p},${a[k - 1] || a[a.length - 1]}`] || 0) + (i[`${p},${a[k + 1] || a[0]}`] || 0))
            .reduce((r, v) => r + v, 0)).reduce((r, v) => r > v ? r : v, 0)
}
