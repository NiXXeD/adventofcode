module.exports = input => {
    let dial = 50
    let crossCount = 0
    input.forEach(val => {
        const [, dir, stepStr] = /([LR])(\d+)/.exec(val)
        let steps = parseInt(stepStr)
        const direction = dir === 'L' ? -1 : 1

        for (let i = 0; i < steps; i++) {
            dial += direction
            if (dial === 100) dial = 0
            if (dial === -1) dial = 99

            if (dial === 0) {
                crossCount++
            }
        }
    })
    return crossCount
}
