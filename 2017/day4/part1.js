const _ = require('lodash')
module.exports = input => {
    return input.filter(pass => {
        let split = pass.split` `
        return _.uniq(split).length === split.length
    }).length
}
