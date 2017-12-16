module.exports = input => {
    const part1 = require('./part1').solve(input)
    let cache = [], val = 'abcdefghijklmnop'
    do {
        cache.push(val)
        val = part1(val)
    } while (!cache.includes(val))
    return cache[1E9 % cache.length]
}
