module.exports = input => {
    let target = +input, pow = Math.pow(3, target.toString(3).length - 1)
    if (pow === target) return pow
    else if (pow >= target / 2) return target - pow
    else return pow + (2 * (target - 2 * pow))
}
