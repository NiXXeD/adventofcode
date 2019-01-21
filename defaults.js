const _ = require('lodash')
const fs = require('fs')

let year = new Date().getFullYear()
if (new Date().getMonth() < 11) year--

let day, part
try {
    day = _(fs.readdirSync(`${year}`))
        .filter(s => /^day/.test(s))
        .map(s => +s.match(/(\d+)/g)[0])
        .max()
} catch (ex) {
    day = 1
}
try {
    part = _(fs.readdirSync(`${year}/day${day}`))
        .filter(s => /^part/.test(s))
        .map(s => +s.match(/(\d+)/g)[0])
        .max()
} catch (ex) {
    part = 1
}

module.exports = {year, day, part}
