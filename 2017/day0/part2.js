const part1 = require('./part1')
const visualize = require('../../2016/day8/visualize')
module.exports = input => visualize(part1(input).split('\n'))
