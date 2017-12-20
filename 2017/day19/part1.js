module.exports = input => {
    let map = input.map(str => str.split``), dx = 0, dy = 1, y = 0, x = map[0].indexOf('|')

    const get = (x, y) => (map[y] && map[y][x]) || ''
    const getNext = () => {
        x += dx
        y += dy
        return get(x, y)
    }
    const test = (x, y) => get(x, y).match(/[\w-|]/)

    let found = '', next
    while ((next = getNext()) !== '') {
        if (next === '+') {
            if (dy !== 1 && test(x, y - 1)) {
                dx = 0
                dy = -1
            } else if (dy !== -1 && test(x, y + 1)) {
                dx = 0
                dy = 1
            } else if (dx !== -1 && test(x + 1, y)) {
                dx = 1
                dy = 0
            } else if (dx !== 1 && test(x - 1, y)) {
                dx = -1
                dy = 0
            }
        } else if (next.match(/\w/)) {
            found += next
        }
    }

    return found
}
