const _ = require('lodash')
const md5 = require('md5')
const order = 'UDLR'.split``
const deltas = {U: [0, -1], D: [0, 1], L: [-1, 0], R: [1, 0]}

module.exports = input => {
    let moves = [{path: '', x: 0, y: 0}]
    while (moves.length) {
        let {path, x, y} = moves.pop()

        if (x === 3 && y === 3) return path

        let room = getRoom(path)
        order.forEach(move => {
            //check if direction is open
            if (room[move] === 'C') {
                return false
            }

            //check if move takes off board
            let delta = deltas[move]
            let nx = x + delta[0]
            let ny = y + delta[1]
            if (nx < 0 || ny < 0 || nx > 3 || ny > 3) {
                return false
            }

            //move is valid
            let npath = path + move
            moves.unshift({path: npath, x: nx, y: ny})
        })
    }

    function getRoom(path) {
        return _(md5(input + path).slice(0, 4).split``)
            .map(c => c.charCodeAt(0) < 98 ? 'C' : 'O')
            .transform((p, v, i) => {
                p[order[i]] = v
            }, {})
            .value()
    }

    return 'No path found.'
}
