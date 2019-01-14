const _ = require('lodash')
module.exports = input => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ', infinites = []
    let coords = input.map(s => s.match(/(\d+)/g)).map(([x, y], i) => ({x: +x, y: +y, z: chars[i]}))
    let maxX = _.maxBy(coords, 'x').x, maxY = _.maxBy(coords, 'y').y
    let grid = _.range(maxY + 1).map(() => _.range(maxX + 1))

    for (let pY = 0; pY <= maxY; pY++) {
        for (let pX = 0; pX <= maxX; pX++) {
            let dist = coords
                .map(({x, y, z}) => ({z, dist: Math.abs(pX - x) + Math.abs(pY - y)}))
                .sort((a, b) => a.dist - b.dist)

            if (dist[0].dist < dist[1].dist) {
                grid[pY][pX] = dist[0].z
            } else {
                grid[pY][pX] = '.'
            }

            if ((pX === 0 || pX === maxX || pY === 0 || pY === maxY) && !infinites.includes(dist[0].z)) {
                infinites.push(dist[0].z)
            }
        }
    }

    let data = grid.map(l => l.join``).join``
    return _.chain(coords)
        .filter(({z}) => !infinites.includes(z))
        .map(({z}) => data.match(new RegExp(z, 'g')).length)
        .sort((a, b) => a - b)
        .max()
}
