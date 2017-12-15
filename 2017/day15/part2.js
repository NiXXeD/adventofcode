module.exports = input => {
    let count = 0, [a, b] = input.join``.match(/\d+/g).map(i => +i)

    for (let i = 0; i < 5000000; i++) {
        do a = (a * 16807) % 2147483647
        while (a & 3)

        do b = (b * 48271) % 2147483647
        while (b & 7)

        if ((a & 0xFFFF) === (b & 0xFFFF)) count++
    }

    return count
}
