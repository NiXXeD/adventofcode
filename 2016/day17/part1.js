const md5 = require('md5')
const order = 'UDLR'.split``
const deltas = {U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0]}

module.exports = (input, part2 = false) => {
    let longest = 0, moves = [{path: '', x: 0, y: 0}]
    while (moves.length) {
        let {path, x, y} = moves.pop()

        if (x === 3 && y === 3) {
            if (!part2) return path
            longest = Math.max(longest, path.length)
        } else {
            let room = md5(input + path).slice(0, 4).split``
                .map(c => 'bcdef'.includes(c) ? 'O' : 'C')
                .reduce((p, v, i) => Object.assign(p, {[order[i]]: v}), {})

            order.forEach(move => {
                let delta = deltas[move]
                let nx = x + delta[0]
                let ny = y + delta[1]
                if (room[move] === 'C' || nx < 0 || ny < 0 || nx > 3 || ny > 3) return false
                moves.unshift({path: path + move, x: nx, y: ny})
            })
        }
    }

    return longest
}
