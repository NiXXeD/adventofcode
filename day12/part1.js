var _ = require('lodash')

module.exports = i => {
    var t = 0
    return (function p(x) {
        if (_.isArray(x)) _.each(x, p)
        else if (_.isObject(x)) _.forIn(x, p)
        else if (_.isNumber(x)) t += x
        return t
    })(JSON.parse(i))
}
