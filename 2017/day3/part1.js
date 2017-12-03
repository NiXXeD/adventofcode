module.exports = input => {
    let m = 1, x = 0, y = 0, n
    do {
        m += 2
        x++
        y++
    } while (m * m < input)

    n = m * m

    // check if south side
    if (n - m + 1 <= input) {
        let diff = n - input
        let dx = Math.abs(x - diff)
        return dx + y
    }
    //TODO implement all sides
}
