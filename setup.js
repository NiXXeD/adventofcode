const _ = require('lodash')
const fs = require('fs')

//defaults
let year = new Date().getFullYear()
let day = _(fs.readdirSync(`${year}`))
        .filter(s => /^day/.test(s))
        .map(s => +s.match(/(\d+)/g)[0])
        .max() + 1

//process args
let args = _.compact([process.argv[2], process.argv[3]])
if (args.length === 2) {
    [year, day] = args
} else if (args.length === 1) {
    [day] = args
}

//create things
let dir = `./${year}/day${day}`
if (!fs.existsSync(dir)) {
    //directories
    console.log(`Creating directories for ${year}.${day}...`)
    fs.mkdirSync(dir)
    fs.writeFileSync(`${dir}/input`, 12345)

    //code
    console.log(`Creating code for parts 1 and 2...`)
    let func = `module.exports = input => {\n     return input\n}`
    fs.writeFileSync(`${dir}/part1.js`, func)
    fs.writeFileSync(`${dir}/part2.js`, func)

    //tests
    console.log(`Creating unit tests...`)
    let tests = fs.readFileSync(`${year}/test.js`, 'utf-8').split('\n')
    tests.splice(tests.length - 2, 0,
        `    it('day ${_.padStart(day, 2, '0')}, part 1', () => test(${day}, 1, 12345))`,
        `    it('day ${_.padStart(day, 2, '0')}, part 2', () => test(${day}, 2, 12345))`
    )
    fs.writeFileSync(`${year}/test.js`, tests.join('\n'))

    console.log('Done.')
}
