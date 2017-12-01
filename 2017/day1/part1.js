module.exports = input => (input + input[0]).match(/(.)\1+/g)
    .map(m => +m[0] * (m.length - 1))
    .reduce((acc, val) => acc + val)
