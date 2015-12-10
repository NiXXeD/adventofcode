module.exports = i => require('./part1')(i, {b: require('./part1')(i.slice(0))})
