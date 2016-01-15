module.exports = (i, m='min') => {
    var _ = require('lodash'), z = i.map(i => i.match(/(\S+) to (\S+) = (\d+)/)).map(i => ({a: [i[1], i[2]], d: i[3]}))
    var x = require('js-combinatorics').permutation(_(z).map('a').flatten().uniq().value())
    return _[m](x.map(t => t.reduce((r, v) => ({p: v, d: r.p ? +_.find(z, {a: [r.p, v]}).d + r.d: 0}), {}).d))
}
