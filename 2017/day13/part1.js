module.exports = input => input.map(str => str.split`: `)
    .map(([depth, range]) => ({depth: +depth, range: +range, mod: (+range * 2) - 2}))
    .reduce((acc, layer) => (layer.depth % layer.mod) ? acc : acc + (layer.depth * layer.range), 0)
