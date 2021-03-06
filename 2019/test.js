const assert = require('assert')

describe('advent of code 2019', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2019, day, part, false)
        return assert.equal(expected, actual)
    }

    // it('day 01, part 1', () => test(1, 1, 123))
    // it('day 01, part 2', () => test(1, 2, 456))
})
