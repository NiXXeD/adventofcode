var moment = require('moment')
var fs = require('fs')

module.exports = function run(day, part) {
    var input = fs.readFileSync(`./day${day}/input`, 'utf-8').trimRight().split('\n')
    var startTime = moment()
    console.log(`${day}.${part} running...`)
    var answer = require(`./day${day}/part${part}`)(input.length === 1 ? input[0] : input)
    console.log(`${day}.${part} answer:\t`, answer)
    var endTime = moment()
    console.log(`${day}.${part} time:\t`, moment(endTime.diff(startTime)).format('mm:ss:SSSS'))
    return answer
}
