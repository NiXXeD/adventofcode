const _ = require('lodash')
const fs = require('fs')
let {day, part, year} = require('./defaults')

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
