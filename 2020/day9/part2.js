const part1 = require('./part1')

module.exports = input => {
    const nums = input.map(i => +i)
    const goal = part1(input)
    for (let x = 0; x < input.length; x++) {
        let acc = nums[x]
        for (let y = x + 1; x + y < input.length; y++) {
            acc += nums[y]
            if (acc === goal) {
                const range = nums.splice(x, y - x + 1)
                const smallest = Math.min(...range)
                const largest = Math.max(...range)
                return smallest + largest
            } else if (acc > goal) {
                break
            }
        }
    }
    return 'Fail!'
}
