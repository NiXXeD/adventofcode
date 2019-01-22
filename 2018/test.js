const assert = require('assert')

describe('advent of code 2018', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2018, day, part, false)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 516))
    it('day 01, part 2', () => test(1, 2, 71892))
    it('day 02, part 1', () => test(2, 1, 5750))
    it('day 02, part 2', () => test(2, 2, 'tzyvunogzariwkpcbdewmjhxi'))
    it('day 03, part 1', () => test(3, 1, 112378))
    it('day 03, part 2', () => test(3, 2, 603))
    it('day 04, part 1', () => test(4, 1, 125444))
    it('day 04, part 2', () => test(4, 2, 18325))
    it('day 05, part 1', () => test(5, 1, 9202))
    it('day 05, part 2', () => test(5, 2, 6394))
    it('day 06, part 1', () => test(6, 1, 3569))
    it('day 06, part 2', () => test(6, 2, 48978))
    it('day 07, part 1', () => test(7, 1, 'CHILFNMORYKGAQXUVBZPSJWDET'))
    it('day 07, part 2', () => test(7, 2, 891))
    it('day 08, part 1', () => test(8, 1, 42254))
    it('day 08, part 2', () => test(8, 2, 25007))
    it('day 09, part 1', () => test(9, 1, 410375))
    it('day 09, part 2', () => test(9, 2, 3314195047))
    it('day 10, part 1', () => test(10, 1, 'Read above.'))
    it('day 10, part 2', () => test(10, 2, 10240))
})
