module.exports = (i, d={}) => {
    i = i.map(s => s.match(/^(\w+).+?(\w)\s(\d+).+?(\w+).$/)).reduce((r, v) => {
        return (r.k[v[1]] = 1, (r[`${v[1]},${v[4]}`] = +v[3] * {e: -1, n: 1}[v[2]], r))
    }, {k: d})
    return require('js-combinatorics').permutation(Object.keys(i.k)).map(a =>
        a.map((p, k, a) => (i[`${p},${a[k - 1] || a[a.length - 1]}`] || 0) + (i[`${p},${a[k + 1] || a[0]}`] || 0))
            .reduce((r, v) => r + v, 0)).reduce((r, v) => r > v ? r : v, 0)
}
