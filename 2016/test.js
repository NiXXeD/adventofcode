const assert = require('assert')

describe('advent of code', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2016, day, part)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 161))
    it('day 01, part 2', () => test(1, 2, 110))
    it('day 02, part 1', () => test(2, 1, 56855))
    it('day 02, part 2', () => test(2, 2, 'B3C27'))
    it('day 03, part 1', () => test(3, 1, 982))
    it('day 03, part 2', () => test(3, 2, 1826))
    it('day 04, part 1', () => test(4, 1, 409147))
    it('day 04, part 2', () => test(4, 2, 991))
    it('day 05, part 1', () => test(5, 1, 'c6697b55'))
    it('day 05, part 2', () => test(5, 2, '8c35d1ab'))
    it('day 06, part 1', () => test(6, 1, 'bjosfbce'))
    it('day 06, part 2', () => test(6, 2, 'veqfxzfx'))
    it('day 07, part 1', () => test(7, 1, 118))
    it('day 07, part 2', () => test(7, 2, 260))
    it('day 08, part 1', () => test(8, 1, 123))
    it('day 08, part 2', () => test(8, 2, 'AFBUPZBJPS'))
})
