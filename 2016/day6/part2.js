const _ = require('lodash')
module.exports = i => _.unzip(i.map(_.values)).map(v => _.minBy(v, c => v.filter(l => l == c).length)).join``
