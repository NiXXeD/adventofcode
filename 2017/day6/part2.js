module.exports = input => {
    let banks = input.split(/\s/).map(i => +i)
    let cache = {}, next = '', cycles = 0

    while (!cache.hasOwnProperty(next)) {
        cache[next] = cycles
        cycles++

        let value = banks.reduce((a, v) => Math.max(a, v), 0)
        let index = banks.findIndex(v => v === value)
        banks[index] = 0

        while (value) {
            index = (index + 1) % banks.length
            banks[index]++
            value--
        }

        next = banks.reduce((a, v) => a + v, '')
    }

    return cycles - cache[next]
}
