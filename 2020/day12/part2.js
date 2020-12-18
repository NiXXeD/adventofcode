module.exports = input => {
    let x = 0, y = 0, wX = 10, wY = -1
    const directions = {
        N: {dX: 0, dY: -1},
        E: {dX: 1, dY: 0},
        S: {dX: 0, dY: 1},
        W: {dX: -1, dY: 0}
    }
    const move = (dir, num) => {
        const {dX, dY} = directions[dir]
        wX += dX * num
        wY += dY * num
    }
    const zoom = num => {
        x += wX * num
        y += wY * num
    }
    const rotate = (dir, num) => {
        for (let i = 0; i < num; i++) {
            if (dir === 'R') {
                let tX = wX
                wX = 0 - wY
                wY = tX
            } else {
                let tX = wX
                wX = wY
                wY = 0 - tX
            }
        }
    }
    input.forEach(instruction => {
        let [, action, num] = instruction.match(/(\w)(\d+)/)
        if (action === 'N') move('N', +num)
        else if (action === 'E') move('E', +num)
        else if (action === 'S') move('S', +num)
        else if (action === 'W') move('W', +num)
        else if (action === 'F') zoom(+num)
        else if (action === 'R' || action === 'L') rotate(action, +num / 90)
    })
    return Math.abs(x) + Math.abs(y)
}

