module.exports = (input, extra = 0) => {
    let moves = 0
    let floors = input
        .map(str => str.match(/(generator|microchip)/g))
        .map(matches => matches ? matches.length : 0)

    //extra items found for part 2
    floors[0] += extra

    let floor = 0
    while (floors[0] || floors[1] || floors[2]) {
        if (floors[floor] === 2) {
            floors[floor] -= 2
            floors[floor + 1] += 2
            moves++
        } else if (floors[floor] >= 2) {
            floors[floor]--
            floors[floor + 1]++
            moves += 2
        } else if (floor < 3) {
            floor++
        } else {
            floor = 0
        }
    }

    return moves
}
