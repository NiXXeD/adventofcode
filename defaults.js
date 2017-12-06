const _ = require('lodash')
const fs = require('fs')

let day, part, year = new Date().getFullYear()
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
