module.exports = input => {
    let total = input.length
    return input.split``
        .map((value, index, array) => {
            let i = (index + (total / 2)) % total
            if (array[i] === value) return +value
            return 0
        })
        .reduce((a, v) => a + v, 0)
}
