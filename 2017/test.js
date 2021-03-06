const assert = require('assert')

describe('advent of code 2017', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2017, day, part, false)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 1141))
    it('day 01, part 2', () => test(1, 2, 950))
    it('day 02, part 1', () => test(2, 1, 47136))
    it('day 02, part 2', () => test(2, 2, 250))
    it('day 03, part 1', () => test(3, 1, 430))
    it('day 03, part 2', () => test(3, 2, 312453))
    it('day 04, part 1', () => test(4, 1, 477))
    it('day 04, part 2', () => test(4, 2, 167))
    it('day 05, part 1', () => test(5, 1, 318883))
    it('day 05, part 2', () => test(5, 2, 23948711))
    it('day 06, part 1', () => test(6, 1, 11137))
    it('day 06, part 2', () => test(6, 2, 1037))
    it('day 07, part 1', () => test(7, 1, 'vgzejbd'))
    it('day 07, part 2', () => test(7, 2, 1226))
    it('day 08, part 1', () => test(8, 1, 5946))
    it('day 08, part 2', () => test(8, 2, 6026))
    it('day 09, part 1', () => test(9, 1, 11347))
    it('day 09, part 2', () => test(9, 2, 5404))
    it('day 10, part 1', () => test(10, 1, 6952))
    it('day 10, part 2', () => test(10, 2, '28e7c4360520718a5dc811d3942cf1fd'))
    it('day 11, part 1', () => test(11, 1, 664))
    it('day 11, part 2', () => test(11, 2, 1447))
    it('day 12, part 1', () => test(12, 1, 115))
    it('day 12, part 2', () => test(12, 2, 221))
    it('day 13, part 1', () => test(13, 1, 2508))
    it('day 13, part 2', () => test(13, 2, 3913186))
    it('day 14, part 1', () => test(14, 1, 8316))
    it('day 14, part 2', () => test(14, 2, 1074))
    it('day 15, part 1', () => test(15, 1, 577))
    it('day 15, part 2', () => test(15, 2, 316))
    it('day 16, part 1', () => test(16, 1, 'lgpkniodmjacfbeh'))
    it('day 16, part 2', () => test(16, 2, 'hklecbpnjigoafmd'))
    it('day 17, part 1', () => test(17, 1, 2000))
    it('day 17, part 2', () => test(17, 2, 10242889))
    it('day 18, part 1', () => test(18, 1, 3423))
    it('day 18, part 2', () => test(18, 2, 7493))
    it('day 19, part 1', () => test(19, 1, 'GPALMJSOY'))
    it('day 19, part 2', () => test(19, 2, 16204))
    it('day 20, part 1', () => test(20, 1, 243))
    it('day 20, part 2', () => test(20, 2, 648))
    it('day 21, part 1', () => test(21, 1, 160))
    it('day 21, part 2', () => test(21, 2, 2271537))
    it('day 22, part 1', () => test(22, 1, 5406))
    it('day 22, part 2', () => test(22, 2, 2511640))
    it('day 23, part 1', () => test(23, 1, 6241))
    it('day 23, part 2', () => test(23, 2, 909))
    it('day 24, part 1', () => test(24, 1, 1868))
    it('day 24, part 2', () => test(24, 2, 1841))
    it('day 25, part 1', () => test(25, 1, 4769))
})
