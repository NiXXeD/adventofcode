const _ = require('lodash')
const fs = require('fs')

//defaults
let year = new Date().getFullYear()
let day = _(fs.readdirSync(`${year}`))
    .filter(s => /^day/.test(s))
    .map(s => +s.match(/(\d+)/g)[0])
    .max()
let part = _(fs.readdirSync(`${year}/day${day}`))
    .filter(s => /^part/.test(s))
    .map(s => +s.match(/(\d+)/g)[0])
    .max()

//process input args
let args = _.compact([process.argv[2], process.argv[3], process.argv[4]])
if (args.length === 3) {
    [year, day, part] = args
} else if (args.length === 2) {
    [day, part] = args
} else if (args.length === 1) {
    [part] = args
}

//run solution
require('./run')(year, day, part)
