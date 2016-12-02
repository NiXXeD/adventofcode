module.exports = input => {
    let keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    let prev = [1, 1]
    return input
        .map(line => {
            return line.split``.reduce((p, v) => {
                let n = [p[0], p[1]]
                if (v === 'U' && p[0] > 0) {
                    n[0] = p[0] - 1
                } else if (v === 'D' && p[0] < 2) {
                    n[0] = p[0] + 1
                } else if (v === 'L' && p[1] > 0) {
                    n[1] = p[1] - 1
                } else if (v === 'R' && p[1] < 2) {
                    n[1] = p[1] + 1
                }
                prev = n
                return n
            }, prev)
        })
        .map(coords => {
            return keypad[coords[0]][coords[1]]
        })
        .join``
}
