module.exports = input => {
    const checkNeighbors = (x, y, seats) => {
        let directions = [
            {dX: 0, dY: -1},
            {dX: 1, dY: -1},
            {dX: 1, dY: 0},
            {dX: 1, dY: 1},
            {dX: 0, dY: 1},
            {dX: -1, dY: 1},
            {dX: -1, dY: 0},
            {dX: -1, dY: -1}
        ]
        return directions
            .filter(({dX, dY}) => {
                let nX = x, nY = y, valid = true
                do {
                    nX += dX
                    nY += dY
                    valid = nY >= 0 && nY < seats.length &&
                        nX >= 0 && nX < seats[0].length
                    if (valid && seats[nY][nX] === '#') return true
                    else if (valid && seats[nY][nX] === 'L') return false
                } while (valid)
                return false
            })
            .length
    }

    const run = seats => {
        const newSeats = seats.map(() => [])
        for (let y = 0; y < seats.length; y++) {
            for (let x = 0; x < seats[0].length; x++) {
                const neighbors = checkNeighbors(x, y, seats)
                const seat = seats[y][x]

                if (seat === 'L' && neighbors === 0) newSeats[y][x] = '#'
                else if (seat === '#' && neighbors > 4)newSeats[y][x] = 'L'
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
