module.exports = input => input.reduce((acc, val) => {
    let n, d = 1, row = val.split(/\s/).map(s => +s).sort((a, b) => a - b)
    do n = row.pop()
    while (!(d = row.find(c => n % c === 0)))
    return acc + (n / d)
}, 0)
