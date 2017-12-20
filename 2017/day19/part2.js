module.exports = input => {
    let dx = 0, dy = 1, y = 0, x = input[0].indexOf('|')
    const get = (x, y) => (input[y] && input[y][x]) || ''
    const getNext = () => {
        x += dx
        y += dy
        return get(x, y)
    }
    const test = (x, y) => get(x, y).match(/[\w-|]/)

    let steps = 1, next
    while ((next = getNext()) !== '') {
        steps++
        if (next === '+') {
            if (dy !== 1 && test(x, y - 1)) [dx, dy] = [0, -1]
            else if (dy !== -1 && test(x, y + 1)) [dx, dy] = [0, 1]
            else if (dx !== -1 && test(x + 1, y)) [dx, dy] = [1, 0]
            else if (dx !== 1 && test(x - 1, y)) [dx, dy] = [-1, 0]
        }
    }

    return steps
}
