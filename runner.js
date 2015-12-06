var moment = require('moment')
var day = `day${process.argv[2]}`
var input = require('fs').readFileSync(`./${day}/input`, 'utf-8').trimRight().split('\n')
var startTime = moment()
console.log('Running...')
console.log('Answer:', require(`./${day}/part${process.argv[3]}`)(input.length === 1 ? input[0] : input))
var endTime = moment()
console.log('Run time:', moment(endTime.diff(startTime)).format('mm:ss:SSSS'))
