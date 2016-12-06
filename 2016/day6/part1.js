const _ = require('lodash')
module.exports = input => {
    return _.chain(input
        .reduce((p, v) => {
            v.split``.forEach((l, i) => {
                if (!p[i][l]) p[i][l] = 0
                p[i][l]++
            })
            return p
        }, {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}}))
        .map(o => _.map(o, (v, k) => ({v, k})))
        .map(a => _.maxBy(a, 'v'))
        .map('k')
        .value()
        .join``

}
