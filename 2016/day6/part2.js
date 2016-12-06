const _ = require('lodash')
module.exports = input => {
    return _(input.reduce((p, v) => v.split``.forEach((c, i) => p[i] += c) || p, ['','','','','','','','']))
        .map(v => _.countBy(v))
        .map(o => _.map(o, (v, k) => ({v, k})))
        .map(a => _.minBy(a, 'v'))
        .map('k')
        .value()
        .join``
}
