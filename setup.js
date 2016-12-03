const _ = require('lodash')
const fs = require('fs')

let year = process.argv[2]
let day = process.argv[3]
let dir = `./${year}/day${day}`
let func = `module.exports = input => {
    return input
}`

//dir, input, and code
fs.mkdirSync(dir)
fs.writeFileSync(`${dir}/input`, 12345)
fs.writeFileSync(`${dir}/part1.js`, func)
fs.writeFileSync(`${dir}/part2.js`, func)

//tests
let tests = fs.readFileSync(`${year}/test.js`, 'utf-8').split('\n')
tests.splice(tests.length - 2, 0,
    `    it('day ${_.padStart(day, 2, '0')}, part 1', () => test(${day}, 1, 12345))`,
    `    it('day ${_.padStart(day, 2, '0')}, part 2', () => test(${day}, 2, 12345))`
)
fs.writeFileSync(`${year}/test.js`, tests.join('\n'))
