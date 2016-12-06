const _ = require('lodash')
module.exports = i => _.unzip(i.map(_.values)).map(v => _.minBy(v, c => v.join``.split(c).length)).join``
