const _ = require('lodash')
module.exports = i => _.zip(...i.map(v => v.split``)).map(v => _.minBy(v, c => v.filter(l => l == c).length)).join``
