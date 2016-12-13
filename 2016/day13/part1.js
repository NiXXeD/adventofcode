const _ = require('lodash')
const sleep = require('sleep')
module.exports = (input, visualize) => {
    let fav = +input
    let test = (x, y) => {
        let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + fav
        let bin = wat.toString(2)
        return bin.split``.reduce((p, v) => +v + p, 0) % 2 === 0
    }

    function solve(goalX, goalY) {
        let grid = []
        for (let y = 0; y < goalY + 4; y++) {
            grid[y] = []
            for (let x = 0; x < goalX + 14; x++) {
                grid[y][x] = test(x, y)
            }
        }

        let x = 1, y = 1, moves = []
        print()
        while (!(x === goalX && y === goalY)) {
            if (visualize) process.stdout.moveCursor(0, 0 - goalY - 5)
            print()

            if (_.get(grid, `[${y}][${x + 1}]`) && !_.find(moves, {x: x + 1, y})) {
                x++
            } else if (_.get(grid, `[${y + 1}][${x}]`) && !_.find(moves, {x, y: y + 1})) {
                y++
            } else if (_.get(grid, `[${y}][${x - 1}]`) && !_.find(moves, {x: x - 1, y})) {
                x--
            } else if (_.get(grid, `[${y - 1}][${x}]`) && !_.find(moves, {x, y: y - 1})) {
                y--
            } else {
                grid[y][x] = false
                moves.pop()
                if (!moves.length) return -1
                x = _.last(moves).x
                y = _.last(moves).y
                moves.pop()
            }
            moves.push({x, y})
            checkPath()
        }

        return moves.length

        function checkPath() {
            let three = _.nth(moves, -4)
            let oops = three && (
                (three.x + 1 === x && three.y === y) ||
                (three.x - 1 === x && three.y === y) ||
                (three.x === x && three.y + 1 === y) ||
                (three.x === x && three.y - 1 === y)
            )
            if (oops) {
                let a = moves.pop()
                grid[a.y][a.x] = false
                let b = moves.pop()
                grid[b.y][b.x] = false
            }
        }

        function print() {
            if (visualize) {
                let output = grid.map((row, gy) => {
                    return row.map((col, gx) => {
                        if (gy === y && gx === x) return 'X'
                        else if (gy === goalY && gx === goalX) return '@'
                        else if (_.find(moves, {x: gx, y: gy})) return 'O'
                        else return (col ? '.' : '#')
                    }).join``
                }).join('\n')
                console.log(output + `\n(${x}, ${y}) Moves: ${moves.length}        `)
                sleep.usleep(1000000 / 25 >> 0)
            }
        }
    }

    return solve(31, 39)
}
