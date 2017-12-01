module.exports = input => {
    return input.match(/(.)\1+/g)
        .map(i => +i[0] * (i.length - 1))
        .reduce((a, v) => a + v, 0) + +input[0]
}
