const _ = require('lodash')
module.exports = input => {
        let keypad = [
            [null, null, 1, null, null],
            [null, 2, 3, 4, null],
            [5, 6, 7, 8, 9],
            [null, 'A', 'B', 'C', null],
            [null, null, 'D', null, null]
        ]

        let prev = [2, 0]
        return input
            .map(line => {
                return line.split``.reduce((p, v) => {
                    let n = [p[0], p[1]]
                    if (v === 'U' && p[0] > 0) {
                        n[0] = p[0] - 1
                    } else if (v === 'D' && p[0] < keypad.length) {
                        n[0] = p[0] + 1
                    } else if (v === 'L' && p[1] > 0) {
                        n[1] = p[1] - 1
                    } else if (v === 'R' && p[1] < keypad[p[0]].length) {
                        n[1] = p[1] + 1
                    }
                    if (!keypad[n[0]] || !keypad[n[0]][n[1]]) n = p
                    prev = n
                    return n
                }, prev)
            })
            .map(coords => {
                return keypad[coords[0]][coords[1]]
            })
            .join``
    }
