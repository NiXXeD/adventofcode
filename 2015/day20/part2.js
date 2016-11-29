module.exports = input => {
    input = +input
    var max = input / 11 >> 0
    var house = [...Array(max)].fill(11)
    for (let e = 2; e < max; e++) {
        let v = 0
        for (let h = e; h < max && v < 51; h += e) {
            house[h] += e * 11
            v++
        }
    }

    return house.reduce((r, v, i) => v > input && !r ? i : r, 0)
}
