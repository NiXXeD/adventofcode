module.exports = input => {
    let points = input.map(str => str.match(/((-|\d)+)/g).map(v => +v))
        .map(([x, y, dX, dY]) => ({x, y, dX, dY}))

    const getHeight = values => {
        let {minY, maxY} = values
            .reduce((a, p) => ({
                minX: Math.min(p.x, a.minX),
                maxX: Math.max(p.x, a.maxX),
                minY: Math.min(p.y, a.minY),
                maxY: Math.max(p.y, a.maxY)
            }), {minY: 0, maxY: 0, minX: 0, maxX: 0})
        return {height: maxY - minY}
    }

    let height, nextPoints = points, nextHeight, iterations = 0
    do {
        points = nextPoints
        height = getHeight(points).height
        nextPoints = points.map(({x, y, dX, dY}) => ({
            x: x + dX,
            y: y + dY,
            dX, dY
        }))
        nextHeight = getHeight(nextPoints).height
        iterations++
    } while (nextHeight <= height)

    return iterations - 1
}
