module.exports = (input, extra = 0) => {
    let moves = 0
    let floors = input
        .map(str => str.match(/(generator|microchip)/g))
        .map(matches => matches ? matches.length : 0)

    //extra items found
    floors[0] += extra

    while (floors[0] || floors[1] || floors[2]) {
        if (floors[0] === 2) {
            floors[0] -= 2
            floors[1] += 2
            moves++
        } else if (floors[0] >= 2) {
            floors[0]--
            floors[1]++
            moves += 2
        } else if (floors[1] === 2) {
            floors[1] -= 2
            floors[2] += 2
            moves++
        } else if (floors[1] >= 2) {
            floors[1]--
            floors[2]++
            moves += 2
        } else if (floors[2] === 2) {
            floors[2] -= 2
            floors[3] += 2
            moves++
        } else if (floors[2] > 0) {
            //2 moves up, one down
            floors[2]--
            floors[3]++
            moves += 2
        }
    }
    return moves
}
