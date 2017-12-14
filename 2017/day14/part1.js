module.exports = input => {
    const knotHash = require('../day10/part2')
    return [...Array(128)]
        .map((k, i) => knotHash(`${input}-${i}`))
        .map(hash => hash.split``.map(hex => parseInt(hex, 16).toString(2).padStart(4, '0')).join``)
        .join`\n`.split``.reduce((a, v) => a + +v, 0)
}
