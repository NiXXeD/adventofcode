const part1 = require('./part1')
module.exports = input => 'abcdefghijklmnopqrstuvwxyz'.split``
    .map(c => part1(input.replace(new RegExp(c, 'gi'), '')))
    .sort((a, b) => a - b)[0]
