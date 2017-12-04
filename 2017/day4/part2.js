const _ = require('lodash')
module.exports = input => {
    return input.filter(pass => {
        let split = pass.split` `
        return _.uniq(split.map(word => word.split``.sort().join``)).length === split.length
    }).length
}
