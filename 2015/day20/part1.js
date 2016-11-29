module.exports = input => {
    input = +input
    var max = input / 10
    var house = [...Array(max)].fill(10)
    for (let e = 2; e < max; e++) {
        for (let h = e; h < max; h += e) {
            house[h] += e * 10
        }
    }

    return house.reduce((r, v, i) => v > input && !r ? i : r, 0)
}
