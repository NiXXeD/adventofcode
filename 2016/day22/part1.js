module.exports = input => {
    let pairs = 0
    const fix = (a='0T') => +a.slice(0, -1)
    let data = input.slice(2).map(str => str.match(/([^ ]+)/g))
        .map(([name, size, used, avail]) => ({
            name, size: fix(size), used: fix(used), avail: fix(avail)
        }))

   data.forEach(a => {
        pairs += data.filter(b => {
            return a.name !== b.name && a.used > 0 && a.used <= b.avail
        }).length
    })
    return pairs
}
