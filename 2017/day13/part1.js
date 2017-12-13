module.exports = input => {
    let layers = input.map(str => str.split`: `)
        .map(([depth, range]) => ({depth: +depth, range: +range - 1, scan: 0, dir: 1}))
    let max = layers.slice(-1)[0].depth

    const scan = () => layers.forEach(layer => {
        let {scan, dir, range} = layer
        if ((scan === 0 && dir === -1) || (scan === range && dir === 1)) layer.dir = 0 - dir
        layer.scan += layer.dir
    })

    let severity = 0
    for (let pos = 0; pos <= max; pos++) {
        let layer = layers.find(layer => layer.depth === pos)
        if (layer && layer.scan === 0) {
            severity += pos * (layer.range + 1)
        }
        scan()
    }

    return severity
}
