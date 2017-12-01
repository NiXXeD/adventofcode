module.exports = input => input.match(/(.)\1+/g)
    .map(m => +m[0] * (m.length - 1))
    .reduce((acc, val) => acc + val) + (input[0] === input.slice(-1) ? +input[0] : 0)
