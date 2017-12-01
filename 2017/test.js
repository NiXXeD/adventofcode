const assert = require('assert')

describe('advent of code 2017', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2017, day, part, false)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 1141))
    it('day 01, part 2', () => test(1, 2, 950))
})
