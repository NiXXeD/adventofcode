const assert = require('assert')

describe('advent of code 2020', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2020, day, part, false)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 972576))
    it('day 01, part 2', () => test(1, 2, 199300880))
    it('day 02, part 1', () => test(2, 1, 458))
    it('day 02, part 2', () => test(2, 2, 342))
    it('day 03, part 1', () => test(3, 1, 181))
    it('day 03, part 2', () => test(3, 2, 1260601650))
    it('day 04, part 1', () => test(4, 1, 239))
    it('day 04, part 2', () => test(4, 2, 188))
    it('day 05, part 1', () => test(5, 1, 858))
    it('day 05, part 2', () => test(5, 2, 557))
    it('day 06, part 1', () => test(6, 1, 7110))
    it('day 06, part 2', () => test(6, 2, 3628))
    it('day 07, part 1', () => test(7, 1, 124))
    it('day 07, part 2', () => test(7, 2, 34862))
    it('day 08, part 1', () => test(8, 1, 1727))
    it('day 08, part 2', () => test(8, 2, 552))
    it('day 09, part 1', () => test(9, 1, 26796446))
    it('day 09, part 2', () => test(9, 2, 3353494))
    it('day 10, part 1', () => test(10, 1, 2040))
    it('day 10, part 2', () => test(10, 2, 28346956187648))
})
