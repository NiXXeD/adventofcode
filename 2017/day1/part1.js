module.exports = input => (input + input[0]).match(/(.)\1+/g)
    .reduce((acc, val) => +val[0] * (val.length - 1) + acc, 0)
