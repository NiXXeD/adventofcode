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

    const squareValue = (tlx, tly, z) => {
        let value = 0
        for (let x = tlx; x < tlx + z; x++) {
            for (let y = tly; y < tly + z; y++) {
                value += grid[`${x},${y}`]
            }
        }
        return value
    }

    let result = {value: 0}
    for (let z = 1; z <= 300; z++) {
        for (let x = 1; x <= 301 - z; x++) {
            for (let y = 1; y <= 301 - z; y++) {
                let value = squareValue(x, y, z)
                if (value > result.value) {
                    result = {x, y, z, value}
                }
            }
        }
        if (result.z < z - 3) break
    }

    return `${result.x},${result.y},${result.z}`
}

// { x: 143, y: 57, z: 10, value: 67 }
