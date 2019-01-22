module.exports = input => {
    let points = input.map(str => str.match(/((-|\d)+)/g).map(v => +v))
        .map(([x, y, dX, dY]) => ({x, y, dX, dY}))

    const getHeight = values => {
        let {minY, maxY, minX, maxX} = values
            .reduce((a, p) => ({
                minX: Math.min(p.x, a.minX),
                maxX: Math.max(p.x, a.maxX),
                minY: Math.min(p.y, a.minY),
                maxY: Math.max(p.y, a.maxY)
            }), {minY: Infinity, maxY: -Infinity, minX: Infinity, maxX: -Infinity})
        return {minY, maxY, minX, maxX, height: maxY - minY}
    }

    let height, nextPoints = points, nextHeight
    do {
        points = nextPoints
        height = getHeight(points).height
        nextPoints = points.map(({x, y, dX, dY}) => ({
            x: x + dX,
            y: y + dY,
            dX, dY
        }))
        nextHeight = getHeight(nextPoints).height
    } while (nextHeight <= height)

    let coords = points.reduce((a, {x, y}) => ({
        ...a,
        [`${x},${y}`]: 1
    }), {})

    let {minY, maxY, minX, maxX} = getHeight(points)
    for (let y = minY - 1; y <= maxY + 1; y++) {
        let str = ''
        for (let x = minX - 1; x <= maxX + 2; x++) {
            str += coords[`${x},${y}`] ? '#' : '.'
        }
        console.log(str)
    }
    return 'Read above.'
}
