module.exports = input => {
    let delay = 0, layers = input.map(str => str.split`: `)
        .map(([depth, range]) => ({depth: +depth, range: (+range * 2) - 2}))
    while (!layers.every(layer => (delay + layer.depth) % layer.range)) delay++
    return delay
}
