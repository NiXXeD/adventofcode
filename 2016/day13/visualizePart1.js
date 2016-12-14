const _ = require('lodash')
const sleep = require('sleep')
const fs = require('fs')
const chalk = require('chalk')

let input = fs.readFileSync(`./2016/day13/input`, 'utf-8').trimRight().split('\n')

let goalX = 31, goalY = 39
let test = (x, y) => {
    if (x > goalX + 10 || x < 0 || y < 0 || y > goalY + 10) return false
    let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + (+input)
    return wat.toString(2).split``.reduce((p, v) => +v + p, 0) % 2 === 0
}

let grid = []
for (let y = 0; y < goalY + 4; y++) {
    grid[y] = []
    for (let x = 0; x < goalX + 14; x++) {
        grid[y][x] = test(x, y)
    }
}

let visited = []
let moves = [{x: 1, y: 1, m: 0}]
while (moves.length) {
    let {x, y, m} = moves.pop()
    visited.push({x, y, m})

    if (_.find(visited, {x: goalX, y: goalY}))
        break;
    if (test(x + 1, y) && !_.find(visited, {X: x + 1, y}) && !_.find(moves, {X: x + 1, y}))
        moves.unshift({x: x + 1, y, m: m + 1})
    if (test(x, y + 1) && !_.find(visited, {x, y: y + 1}) && !_.find(moves, {x, y: y + 1}))
        moves.unshift({x, y: y + 1, m: m + 1})
    if (test(x - 1, y) && !_.find(visited, {x: x - 1, y}) && !_.find(moves, {x: x - 1, y}))
        moves.unshift({x: x - 1, y, m: m + 1})
    if (test(x, y - 1) && !_.find(visited, {x, y: y - 1}) && !_.find(moves, {x, y: y - 1}))
        moves.unshift({x, y: y - 1, m: m + 1})

    let output = grid.map((row, gy) => {
        return row.map((col, gx) => {
            if (gx === 1 && gy === 1) return chalk.yellow('O')
            else if (gx === goalX && gy === goalY) return chalk.yellow('O')
            else if (_.find(visited, {x: gx, y: gy})) return chalk.green('O')
            else return (col ? ' ' : chalk.gray('#'))
        }).join``
    }).join('\n')
    console.log(output + `\nMoves: ${moves.length} Visited: ${visited.length}\n`)
    sleep.usleep(1000000 / 25 >> 0)
    process.stdout.moveCursor(0, 0 - goalY - 6)
}

console.log(`Final answer: ${visited.filter(v => v.x === goalX && v.y === goalY).slice(-1)[0].m}`)
