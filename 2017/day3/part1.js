module.exports = input => {
    let m = 1, x = 0, n = 0
    do {
        m += 2
        x++
    } while ((n = m * m) < input)

    while (n - m + 1 > input) n -= m - 1
    return Math.abs(x - (n - input)) + x
}
