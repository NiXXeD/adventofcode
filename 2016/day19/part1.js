const _ = require('lodash')
module.exports = input => {
    let target = +input
    let powers = _.range(24).map(i => Math.pow(2, i))
    let highestPower = _.findLast(powers, i => i <= target)
    let diff = target - highestPower
    return 2 * diff + 1
}
