module.exports = input => {
    let target = +input, powers = [...Array(20).keys()].map(i => Math.pow(3, i)).reverse(),
        highestPower = powers.find(i => i <= target)

    if (highestPower === target) return highestPower
    else if (highestPower >= target / 2) return target - highestPower
    else return highestPower + (2 * (target - 2 * highestPower))
}
