module.exports = input => {
        let keypad = [
            [0, 0, 1, 0, 0],
            [0, 2, 3, 4, 0],
            [5, 6, 7, 8, 9],
            [0, 'A', 'B', 'C', 0],
            [0, 0, 'D', 0, 0]
        ]

        let prev = [2, 0]
        return input
            .map(line => {
                return line.split``.reduce((p, v) => {
                    let n = [p[0], p[1]]
                    if (v === 'U') n[0] = p[0] - 1
                    else if (v === 'D') n[0] = p[0] + 1
                    else if (v === 'L') n[1] = p[1] - 1
                    else if (v === 'R') n[1] = p[1] + 1
                    if (!keypad[n[0]] || !keypad[n[0]][n[1]]) n = p
                    return prev = n
                }, prev)
            })
            .map(coords => keypad[coords[0]][coords[1]])
            .join``
    }
