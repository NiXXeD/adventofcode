const _ = require('lodash')
const sleep = require('sleep')
const fs = require('fs')

let input = fs.readFileSync(`./2016/day13/input`, 'utf-8').trimRight().split('\n')
let test = (x, y) => {
    if (x < 0 || y < 0) return false
    let wat = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + (+input)
    return wat.toString(2).split``.reduce((p, v) => +v + p, 0) % 2 === 0
}

let grid = []
for (let y = 0; y < 30; y++) {
    grid[y] = []
    for (let x = 0; x < 50; x++) {
        grid[y][x] = test(x, y)
    }
}

let visited = []
let moves = [{x: 1, y: 1, m: 0}]
while (moves.length) {
    let {x, y, m} = moves.pop()
    visited.push({x, y})

    if (m <= 51) {
        if (test(x + 1, y) && !_.find(visited, {x: x + 1, y}))
            moves.push({x: x + 1, y, m: m + 1})
        if (test(x, y + 1) && !_.find(visited, {x, y: y + 1}))
            moves.push({x, y: y + 1, m: m + 1})
        if (test(x - 1, y) && !_.find(visited, {x: x - 1, y}))
            moves.push({x: x - 1, y, m: m + 1})
        if (test(x, y - 1) && !_.find(visited, {x, y: y - 1}))
            moves.push({x, y: y - 1, m: m + 1})
    }

    process.stdout.moveCursor(0, -33)
    let output = grid.map((row, gy) => {
        return row.map((col, gx) => {
            if (_.find(visited, {x: gx, y: gy})) return 'O'
            else return (col ? '.' : '#')
        }).join``
    }).join('\n')
    console.log('\n' + output + `\nVisited: ${visited.length}\n`)
    sleep.usleep(1000000 / 25 >> 0)
}
