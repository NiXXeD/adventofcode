const _ = require('lodash')
module.exports = i => _.zip(...i.map(v => v.split``))
    .map(v => _(_.countBy(v)).map((v, x) => ({v, x})).minBy('v'))
    .map(v => v.x).join``
