const _ = require('lodash')
module.exports = input => {
    let target = +input
    let powers = _.range(24).map(i => Math.pow(3, i))
    let highestPower = _.findLast(powers, i => i <= target)
    let diff = target - highestPower

    if (highestPower === target) return highestPower
    else if (highestPower >= target / 2) return diff
    else return highestPower + (2 * (diff - highestPower))
}
