module.exports = input => {
    let facing = 'E', x = 0, y = 0
    const directions = {
        N: {dX: 0, dY: -1},
        E: {dX: 1, dY: 0},
        S: {dX: 0, dY: 1},
        W: {dX: -1, dY: 0}
    }
    const dirs = Object.keys(directions)
    const move = (dir, num) => {
        const {dX, dY} = directions[dir]
        x += dX * num
        y += dY * num
    }
    const rotate = (dir, num) => {
        const index = dirs.indexOf(facing)
        const modifier = dir === 'L' ? -1 : 1
        const newIndex = (index + (num * modifier) + dirs.length) % dirs.length
        facing = dirs[newIndex]
    }
    input.forEach(instruction => {
        let [, action, num] = instruction.match(/(\w)(\d+)/)
        if (action === 'N' || (facing === 'N' && action === 'F')) move('N', +num)
        else if (action === 'E' || (facing === 'E' && action === 'F')) move('E', +num)
        else if (action === 'S' || (facing === 'S' && action === 'F')) move('S', +num)
        else if (action === 'W' || (facing === 'W' && action === 'F')) move('W', +num)
        else if (action === 'R' || action === 'L') rotate(action, +num / 90)
    })
    return Math.abs(x) + Math.abs(y)
}

