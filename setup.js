const _ = require('lodash')
const fs = require('fs')

//defaults
let {year, day} = require('./defaults')

//process args
let args = _.compact([process.argv[2], process.argv[3]])
if (args.length === 2) {
    [year, day] = args
} else if (args.length === 1) {
    [day] = args
} else {
    day++
}

//create things
let dir = `./${year}`
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}
dir = `./${year}/day${day}`
if (!fs.existsSync(dir)) {
    //directories
    console.log(`Creating directories for ${year}.${day}...`)
    fs.mkdirSync(dir)
    fs.writeFileSync(`${dir}/input`, '12345')

    //code
    console.log(`Creating code for parts 1 and 2...`)
    let func = `module.exports = input => {\n    return input\n}`
    fs.writeFileSync(`${dir}/part1.js`, func)
    fs.writeFileSync(`${dir}/part2.js`, func)

    //tests
    let testPath = `${year}/test.js`
    if (fs.existsSync(testPath)) {
        console.log(`Creating unit tests...`)
        let tests = fs.readFileSync(testPath, 'utf-8').split('\n')
        tests.splice(tests.length - 2, 0,
            `    it('day ${_.padStart(day, 2, '0')}, part 1', () => test(${day}, 1, 12345))`,
            `    it('day ${_.padStart(day, 2, '0')}, part 2', () => test(${day}, 2, 12345))`
        )
        fs.writeFileSync(`${year}/test.js`, tests.join('\n'))
    }

    console.log('Done.')
}
