const _ = require('lodash')
module.exports = i => _.unzip(i.map(_.values)).map(v => _.maxBy(v, c => v.join``.split(c).length)).join``
