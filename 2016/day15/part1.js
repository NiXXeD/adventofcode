module.exports = (input, part2 = false) => {
    let time = 0, discs = input.map(str => str.match(/(\d+)/g))
        .map(([disc, pos,, cur]) => ({pos: +pos, cur: +cur, ready: (2 * +pos - +disc) % +pos}))
        .concat(part2 ? [{pos: 11, cur: 0, ready: 4}] : [])
    while (!discs.every(disc => disc.ready === ((disc.cur + time) % disc.pos))) time++
    return time
}
