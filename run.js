const _ = require('lodash')
const moment = require('moment')
const fs = require('fs')

module.exports = function run(year, day, part, output = true) {
    let input = fs.readFileSync(`./${year}/day${day}/input`, 'utf-8').trimRight().split('\n')
    let startTime = moment()
    if (output) console.log(`${year}.${day}.${part} running...`)
    let answer = require(`./${year}/day${day}/part${part}`)(input.length === 1 ? input[0] : input)
    if (output) {
        if (_.isObject(answer) || _.isArray(answer))
            console.log(`${year}.${day}.${part} answer:\n`, JSON.stringify(answer, null, 2))
        else
            console.log(`${year}.${day}.${part} answer:\t`, answer)
    }
    let endTime = moment()
    if (output) console.log(`${year}.${day}.${part} time:\t\t`, moment(endTime.diff(startTime)).format('mm:ss:SSSS'))
    return answer
}
