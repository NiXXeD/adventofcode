let part1 = require('./part1').solution
module.exports = input => {
    let [players, maxValue] = input.match(/\d+/g).map(v => +v)
    return part1(players, maxValue * 100)
}
