const _ = require('lodash')

module.exports = input => {
    let moves = 0
    let data = _(input.slice(2).map(str => str.match(/(\d+)/g)))
        .map(([x, y, size, used, avail, percent]) => ({
            x: +x, y: +y, size: +size, used: +used, avail: +avail
        }))
        .orderBy(['x', 'y'], ['desc', 'asc'])
        .value()

    let goal = _.first(data)
    goal.goal = true

    //avoid wall edge but move next to goal data
    let wallEdge = _(data)
        .filter(a => a.used > 200)
        .minBy('x')
    moveTo(wallEdge.x - 1, 0)
    moveTo(goal.x, goal.y)

    //down left left up right until we win
    let empty
    do {
        empty = _.find(data, a => a.used == 0)

        moveTo(empty.x, empty.y + 1)
        moveTo(empty.x - 2, 0)
        moveTo(empty.x - 1, 0)

        goal = _.find(data, a => a.goal)
    } while (goal.x > 0)

    return moves

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
        } while (empty.x != x || empty.y != y)
    }

    function find(x, y) {
        return _.find(data, a => a.x == x && a.y == y)
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
}
