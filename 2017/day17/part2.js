module.exports = input => {
    let steps = +input, index = 0, valAfterZero = 1

    for (let i = 0; i < 50000000; i++) {
        index = (index + steps) % (i + 1) + 1
        if (index === 1) valAfterZero = i + 1
    }

    return valAfterZero
}
