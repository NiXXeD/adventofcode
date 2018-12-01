const assert = require('assert')

describe('advent of code 2018', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2018, day, part, false)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 516))
    it('day 01, part 2', () => test(1, 2, 71892))
})
