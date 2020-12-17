module.exports = input => {
    const checkNeighbors = (x, y, seats) => {
        let seatedNeighbors = 0
        for (let a = y - 1; a <= y + 1; a++) {
            for (let b = x - 1; b <= x + 1; b++) {
                const validY = a >= 0 && a < seats.length
                const validX = b >= 0 && b < seats[0].length
                const validPair = a !== y || b !== x
                if (validY && validX && validPair) {
                    seatedNeighbors += seats[a][b] === '#' ? 1 : 0
                }
            }
        }
        return seatedNeighbors
    }

    const run = seats => {
        const newSeats = seats.map(() => [])
        for (let y = 0; y < seats.length; y++) {
            for (let x = 0; x < seats[0].length; x++) {
                const neighbors = checkNeighbors(x, y, seats)
                const seat = seats[y][x]

                if (seat === 'L' && neighbors === 0) newSeats[y][x] = '#'
                else if (seat === '#' && neighbors > 3)newSeats[y][x] = 'L'
                else newSeats[y][x] = seat
            }
        }
        return newSeats
    }

    let layout = input.map(l => l.split('')), changesDetected = false, runs = 0
    do {
        runs++
        let newLayout = run(layout)
        changesDetected = newLayout.map(l => l.join('')).join('') !== layout.map(l => l.join('')).join('')
        layout = newLayout
    } while (changesDetected)

    return layout
        .map(l => l.join(''))
        .join('')
        .split('#')
        .length - 1
}
