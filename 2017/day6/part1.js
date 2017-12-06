module.exports = input => {
    let cache = [input.replace(/\s/g, '')]
    let banks = input.split(/\s/).map(i => +i)
    let next = ''
    let cycles = 0

    const redestribute = () => {
        let value = banks.reduce((a, v) => Math.max(a, v), 0)
        let index = banks.findIndex(v => v === value)
        banks[index] = 0

        while (value) {
            index = (index + 1) % banks.length
            banks[index]++
            value--
        }
    }

    while (!cache.includes(next)) {
        cache.push(next)
        cycles++
        redestribute()
        next = banks.reduce((a, v) => a + v, '')
    }

    return cycles
}
