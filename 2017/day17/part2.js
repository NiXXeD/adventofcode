module.exports = input => {
    let steps = +input, index = 0, current = 1, valAfterZero = 1

    for (let i = 0; i < 50000000; i++) {
        index = (index + steps) % current + 1
        if (index === 1) valAfterZero = current
        current++
    }

    return valAfterZero
}
