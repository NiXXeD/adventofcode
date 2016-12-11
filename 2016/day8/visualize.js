const _ = require('lodash')
const fs = require('fs')
const sleep = require('sleep')

let screen = []
for (let x = 0; x < 6; x++) {
    let row = []
    for (let y = 0; y < 50; y++) {
        row.push(0)
    }
    screen.push(row)
}

let input = fs.readFileSync(`./2016/day8/input`, 'utf-8').trimRight().split('\n')
input.forEach(line => {
    if (_.startsWith(line, 'rect')) {
        let [,a, b] = line.match(/rect (\d+)x(\d+)/)
        a = +a
        b = +b

        for (let x = 0; x < a; x++) {
            for (let y = 0; y < b; y++) {
                screen[y][x] = 1
            }
        }
    } else if (_.startsWith(line, 'rotate column')) {
        let [,a, b] = line.match(/rotate column x=(\d+) by (\d+)/)
        a = +a
        b = +b

        for (let i = 0; i < b; i++) {
            let first = screen[5][a]
            for (let y = 5; y >= 0; y--) {
                let col = ((y - 1) + 6) % 6
                screen[y][a] = screen[col][a]
            }
            screen[0][a] = first
        }
    } else if (_.startsWith(line, 'rotate row')) {
        let [,a, b] = line.match(/rotate row y=(\d+) by (\d+)/)
        a = +a
        b = +b

        for (let i = 0; i < b; i++) {
            let val = screen[a].pop()
            screen[a].unshift(val)
        }
    }

    print()
    process.stdout.moveCursor(0, -6)
    sleep.usleep(1000000 / 25 >> 0)
})

print()

function print() {
    process.stdout.write(screen.map(lines => lines.map(i => i ? '#' : ' ').join``).join('\n') + '\n')
}
