module.exports = input => {
    const find = (arr, min, max) => {
        return arr.split('')
            .reduce(({lower, upper}, x) => {
                let half = Math.ceil((upper - lower) / 2)
                if (x === 'F' || x === 'L') return {lower, upper: upper - half}
                else if (x === 'B' || x === 'R') return {upper, lower: lower + half}
            }, {lower: min, upper: max}).lower
    }
    return input
        .map(seat => {
            let [, rows, cols] = seat.match(/([B|F]{7})([L|R]{3})/)
            const row = find(rows, 0, 127)
            const col = find(cols, 0, 7)
            return row * 8 + col
        })
        .reduce((a, v) => Math.max(a, v), 0)
}
