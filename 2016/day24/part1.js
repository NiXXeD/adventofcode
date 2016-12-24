const _ = require('lodash')
const jsc = require('js-combinatorics')
const goals = '1234567'.split``
const fs = require('fs')
const cache = require('./cache.json')

module.exports = (input, part2 = false) => {
    let grid = input
        .map(row => row.split``)

    let best = Number.POSITIVE_INFINITY
    let paths = jsc.permutation(goals).toArray()
    paths = _.map(paths, path => {
        let nextX = 1
        let nextY = 19
        let totalSteps = 0
        if (part2) path.push('0')

        for (let i = 0; i < path.length; i++) {
            let key = `${grid[nextY][nextX]},${path[i]}`
            if (cache[key]) {
                totalSteps += cache[key].steps
                nextX = cache[key].x
                nextY = cache[key].y
            } else {
                console.log('calculating', key)
                let result = solveOne({
                    x: nextX,
                    y: nextY,
                    steps: 0
                }, path[i])

                totalSteps += result.steps
                cache[key] = {steps: result.steps, x: result.x, y: result.y}
                console.log(cache[key])
                if (key == '0,1' && result.steps !== 22) process.exit(0)
                fs.writeFileSync('./2016/day24/cache.json', JSON.stringify(cache, null, 2))

                nextX = result.x
                nextY = result.y
            }

            if (totalSteps > best) {
                return Number.POSITIVE_INFINITY
            }
        }
        best = Math.min(totalSteps, best)

        return totalSteps
    })

    return _.min(paths)

    function solveOne(initial, goal) {
        let queue = [initial]
        let visited = []
        while (queue.length) {
            let {x, y, steps} = _.cloneDeep(queue.pop())

            visited.push({x, y})
            let current = grid[y][x]
            if (goal === current) {
                return {x, y, steps}
            }

            const validate = (x, y) => {
                return grid[y] && grid[y][x] && grid[y][x] !== '#' && !_.find(queue, {x, y}) && !_.find(visited, {x, y})
            }
            if (validate(x + 1, y)) {
                queue.unshift({x: x + 1, y, steps: steps + 1})
            }
            if (validate(x - 1, y)) {
                queue.unshift({x: x - 1, y, steps: steps + 1})
            }
            if (validate(x, y + 1)) {
                queue.unshift({x, y: y + 1, steps: steps + 1})
            }
            if (validate(x, y - 1)) {
                queue.unshift({x, y: y - 1, steps: steps + 1})
            }
        }
    }
}

//350 low
//656 high
