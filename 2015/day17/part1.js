module.exports = input => require('js-combinatorics').power(input)
    .filter(a => a.reduce((r, v) => r + +v, 0) === 150).length
