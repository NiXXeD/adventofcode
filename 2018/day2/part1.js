module.exports = input => input
    .map(word => word.split``.sort().join``)
    .map(word => ([!!word.match(/(.)\1/), !!word.match(/(.)\1\1/)]))
    .reduce(([a, b], [c, d]) => [a + c, b + d], [0, 0])
    .reduce((acc, val) => acc * val, 1)
