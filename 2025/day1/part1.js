module.exports = input => {
    let dial = 50
    return input.reduce((acc, val) => {
        const [,dir, stepStr] = /([LR])(\d+)/.exec(val)
        const steps = dir === 'L' ? -parseInt(stepStr) : parseInt(stepStr)
        dial += steps
        while (dial < 0) dial += 100
        while (dial > 99) dial -= 100
        if (dial === 0) acc++

        return acc
    }, 0)
}
