module.exports = input => {
    let count = 0, [a, b] = input.join``.match(/\d+/g).map(i => +i)

    for (let i = 0; i < 4E7; i++) {
        a = (a * 16807) % 2147483647
        b = (b * 48271) % 2147483647

        if ((a & 0xFFFF) === (b & 0xFFFF)) count++
    }

    return count
}
