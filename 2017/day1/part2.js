module.exports = input => input.split``
    .reduce((acc, val, index, arr) => acc + (arr[(index + (arr.length / 2)) % arr.length] === val ? +val : 0), 0)
