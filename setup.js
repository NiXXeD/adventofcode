const fs = require('fs')

let year = process.argv[2]
let day = process.argv[3]
let dir = `./${year}/day${day}`
let func = `module.exports = input => {
    return input
}`

fs.mkdirSync(dir)
fs.writeFileSync(`${dir}/input`, 'this is a test')
fs.writeFileSync(`${dir}/part1.js`, func)
fs.writeFileSync(`${dir}/part2.js`, func)
