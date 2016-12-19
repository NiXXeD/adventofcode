module.exports = input => {
    let target = +input
    let powers = [...Array(20).keys()].map(i => Math.pow(3, i)).reverse()
    let highestPower = powers.find(i => i <= target)
    let diff = target - highestPower

    if (highestPower === target) return highestPower
    else if (highestPower >= target / 2) return diff
    else return highestPower + (2 * (diff - highestPower))
}
