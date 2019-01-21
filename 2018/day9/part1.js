module.exports = input => {
    let [players, maxValue] = input.match(/\d+/g).map(v => +v)
    return module.exports.solution(players, maxValue)
}

module.exports.solution = (players, maxValue) => {
    let scores = [...Array(players)].map(() => 0)
    let current = {value: 0}, player = 0, value = 1
    current.next = current
    current.prev = current

    do {
        if (value % 23 === 0) {
            let removed = current.prev.prev.prev.prev.prev.prev.prev
            scores[player] += value + removed.value
            removed.prev.next = removed.next
            removed.next.prev = removed.prev
            current = removed.next
        } else {
            let next = {value, next: current.next.next, prev: current.next}
            current.next.next.prev = next
            current.next.next = next
            current = next
        }
        player = (player + 1) % players
        value++
    } while (value <= maxValue)

    return scores.reduce((a, v) => Math.max(a, v), 0)
}
