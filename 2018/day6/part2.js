const _ = require('lodash')
module.exports = input => {
    let coords = input.map(s => s.match(/(\d+)/g)).map(([x, y]) => ({x: +x, y: +y}))
    let maxX = _.maxBy(coords, 'x').x, maxY = _.maxBy(coords, 'y').y
    let close = 0

    for (let pY = 0; pY <= maxY; pY++) {
        for (let pX = 0; pX <= maxX; pX++) {
            let dist = _.chain(coords)
                .map(({x, y}) => Math.abs(pX - x) + Math.abs(pY - y))
                .sum()
                .value()

            if (dist < 10000) {
                close++
            }
        }
    }

    return close
}
