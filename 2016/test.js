const assert = require('assert')

describe('advent of code', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2016, day, part)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 161))
    it('day 01, part 2', () => test(1, 2, 110))
})
