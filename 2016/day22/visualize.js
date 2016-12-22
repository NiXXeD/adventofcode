const _ = require('lodash')
const fs = require('fs')
const sleep = require('sleep')
const chalk = require('chalk')

let input = fs.readFileSync(`./2016/day22/input`, 'utf-8').trimRight().split('\n')
let moves = 0
let data = _(input.slice(2).map(str => str.match(/(\d+)/g)))
    .map(([x, y, size, used, avail, percent]) => ({
        x: +x, y: +y, size: +size, used: +used, avail: +avail
    }))
    .orderBy(['x', 'y'], ['desc', 'asc'])
    .value()

let goal = _.first(data)
goal.goal = true

print(false)

//avoid wall edge but move next to goal data
let wallEdge = _(data)
    .filter(a => a.used > 200)
    .minBy('x')
moveTo(wallEdge.x - 1, 0)
moveTo(goal.x, goal.y)

let empty
do {
    empty = _.find(data, a => a.used == 0)
    //down left left up
    moveTo(empty.x, empty.y + 1)
    moveTo(empty.x - 2, 0)
    moveTo(empty.x - 1, 0)

    goal = _.find(data, a => a.goal)
} while (goal.x > 0)

function moveTo(x, y) {
    let empty = {}
    do {
        empty = _.find(data, a => a.used == 0)
        if (empty.x != x) {
            let newX = (empty.x - x) > 0 ? -1 : 1
            moveData(find(empty.x + newX, empty.y), empty)
        } else if (empty.y != y) {
            let newY = (empty.y - y) > 0 ? -1 : 1
            moveData(find(empty.x, empty.y + newY), empty)
        }
        print()
    } while (empty.x != x || empty.y != y)
}

function find(x, y) {
    return _.find(data, a => a.x == x && a.y == y)
}

function print(reset = true) {
    let maxX = _.maxBy(data, 'x').x
    let maxY = _.maxBy(data, 'y').y
    if (reset) process.stdout.moveCursor(0, 0 - maxY - 3)

    //build grid
    let grid = []
    for (let y = 0; y <= maxY; y++) {
        grid[y] = []
        for (let x = 0; x <= maxX; x++) {
            grid[y][x] = _.find(data, a => a.x == x && a.y == y)
        }
    }

    let output = grid.map((row, y) => {
        return row.map((col, x) => {
            if (col.goal) {
                return chalk.blue('G')
            } else if (!y && !x) {
                return chalk.blue('F')
            } else if (col.used == 0) {
                return chalk.green('_')
            } else if (col.used < 95) {
                return chalk.yellow('.')
            } else if (col.used < 125) {
                return chalk.red('.')
            } else {
                return chalk.red('#')
            }
        }).join` `
    }).join`\n`
    process.stdout.write(output + '\n' + `Moves: ${moves}\n\n`)
    sleep.usleep(1000000 / 50 >> 0)
}

function moveData(a, b) {
    moves++

    b.used += a.used
    b.avail = b.size - b.used
    a.used = 0
    a.avail = a.size
    if (a.goal) {
        a.goal = false
        b.goal = true
    }
}
