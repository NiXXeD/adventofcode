module.exports = (input, part2 = false) => {
    let discs = input.map(str => str.match(/(\d+)/g))
        .map(([disc, pos, time, cur]) => {
            return {
                disc: +disc,
                pos: +pos,
                cur: +cur,
                ready: ((+pos - +disc) + +pos) % +pos
            }
        })

    if (part2) discs.push({disc: 7, pos: 11, cur: 0, ready: 4})

    let time = 0
    let found = false
    while (!found) {
        time++
        discs.map(disc => {
            disc.cur = (disc.cur + 1) % disc.pos
        })
        found = discs.every(disc => disc.ready === disc.cur)
    }

    return time
}
