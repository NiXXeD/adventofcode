module.exports = input => {
    const gridSerialNumber = +input
    const powerLevel = (x, y) => {
        let rackId = x + 10
        let powerLevel = (rackId * y) + gridSerialNumber
        powerLevel *= rackId
        return (Math.floor(powerLevel / 100) % 10) - 5
    }

    const grid = {}
    for (let x = 1; x <= 300; x++) {
        for (let y = 1; y <= 300; y++) {
            grid[`${x},${y}`] = powerLevel(x, y)
        }
    }

    const squareValue = (tlx, tly) => {
        let value = 0
        for (let x = tlx; x < tlx + 3; x++) {
            for (let y = tly; y < tly + 3; y++) {
                value += grid[`${x},${y}`]
            }
        }
        return value
    }

    const squares = []
    for (let x = 1; x <= 297; x++) {
        for (let y = 1; y <= 297; y++) {
            squares.push({x, y, value: squareValue(x, y)})
        }
    }

    let answer = squares.reduce((acc, square) => {
        return acc.value > square.value ? acc : square
    }, {value: 0})
    return `${answer.x},${answer.y}`
}
