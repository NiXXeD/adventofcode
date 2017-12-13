module.exports = input => {
    let initial = input.map(str => str.split`: `)
        .map(([depth, range]) => ({depth: +depth, range: +range - 1, scan: 0, dir: 1}))
    let max = initial.slice(-1)[0].depth

    const timePasses = layers => layers.map(layer => {
        let {depth, scan, dir, range} = layer
        if ((scan === 0 && dir === -1) || (scan === range && dir === 1)) dir = 0 - dir
        scan += dir
        return {depth, range, scan, dir}
    })

    const isSafe = layers => {
        let now = layers
        for (let pos = 0; pos <= max; pos++) {
            let layer = now.find(layer => layer.depth === pos)
            if (layer && layer.scan === 0) return false
            now = timePasses(now)
        }

        return true
    }

    let current = initial, delay = 0, safe = false
    do {
        current = timePasses(current)
        delay++
        safe = isSafe(current)
    } while (!safe)

    return delay
}
