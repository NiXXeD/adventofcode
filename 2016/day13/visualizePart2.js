const _ = require('lodash')
const sleep = require('sleep')
const fs = require('fs')

let input = fs.readFileSync(`./2016/day13/input`, 'utf-8').trimRight().split('\n')
let fav = +input
let test = (x, y) => {
    let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + fav
    return wat.toString(2).split``.reduce((p, v) => +v + p, 0) % 2 === 0
}

function solve(maxSteps) {
    let grid = []
    for (let y = 0; y < 30; y++) {
        grid[y] = []
        for (let x = 0; x < 50; x++) {
            grid[y][x] = test(x, y)
        }
    }

    let x = 1, y = 1, moves = [], visited = [{x: 1, y: 1}], stuck = false
    print()
    while (!stuck) {
        process.stdout.moveCursor(0, -31)
        print()

        let checkStuck = () => {
            grid[y][x] = false
            moves.pop()
            if (!moves.length) {
                stuck = true
                return
            }
            x = _.last(moves).x
            y = _.last(moves).y
            moves.pop()
        }
        if (moves.length < maxSteps) {
            if (_.get(grid, `[${y}][${x + 1}]`) && !_.find(moves, {x: x + 1, y})) {
                x++
            } else if (_.get(grid, `[${y + 1}][${x}]`) && !_.find(moves, {x, y: y + 1})) {
                y++
            } else if (_.get(grid, `[${y}][${x - 1}]`) && !_.find(moves, {x: x - 1, y})) {
                x--
            } else if (_.get(grid, `[${y - 1}][${x}]`) && !_.find(moves, {x, y: y - 1})) {
                y--
            } else {
                checkStuck()
            }
        } else {
            checkStuck()
        }
        moves.push({x, y})
        if (!_.find(visited, {x, y})) visited.push({x, y})
        checkPath()
    }

    process.stdout.moveCursor(0, -31)
    print()
    return visited.length

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
        let output = grid.map((row, gy) => {
            return row.map((col, gx) => {
                if (gy === y && gx === x) return 'X'
                else if (gy === 1 && gx === 1) return 'O'
                else if (_.find(visited, {x: gx, y: gy})) return '@'
                else return (col ? '.' : '#')
            }).join``
        }).join('\n')
        console.log(output + `\n(${x}, ${y}) Moves: ${moves.length}, Visited: ${visited.length}       `)
        sleep.usleep(1000000 / 25 >> 0)
    }
}

solve(50)
