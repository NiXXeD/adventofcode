module.exports = input => {
    let keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    let prev = [1, 1]
    return input
        .map(line => line.split``
            .reduce((p, v) => {
                let n = [p[0], p[1]]
                if (v === 'U') n[0] = p[0] - 1
                else if (v === 'D') n[0] = p[0] + 1
                else if (v === 'L') n[1] = p[1] - 1
                else if (v === 'R') n[1] = p[1] + 1
                if (!keypad[n[0]] || !keypad[n[0]][n[1]]) n = p
                return prev = n
            }, prev))
        .map(coords => keypad[coords[0]][coords[1]])
        .join``
}
