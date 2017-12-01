module.exports = input => 2 * input.split``
    .reduce((acc, val, idx, arr) => acc + (arr.slice(arr.length / 2)[idx] === val ? +val : 0), 0)
