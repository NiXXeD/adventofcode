module.exports = input => require('./part1')(input, {b: require('./part1')(input.slice(0))})
