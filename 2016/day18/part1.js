module.exports = (input, max = 40) => {
    let rows = [input.split``.map(c => c == '^' ? 0 : 1)]
    while (rows.length < max) {
        let newRow = []
        let prevRow = rows.slice(-1)[0]
        for (let i = 0; i < prevRow.length; i++) {
            let left = (i == 0 ? 1 : prevRow[i - 1])
            let right = (i == prevRow.length - 1 ? 1 : prevRow[i + 1])
            newRow[i] = left == right ? 1 : 0
        }
        rows.push(newRow)
    }

    let sum = (p, v) => p + v
    return rows.map(row => row.reduce(sum, 0)).reduce(sum, 0)
}
