module.exports = input => {
    return [...Array(2503)].reduce(r => {
        r.forEach(e => {
            if (!e.rest) e.distance += e.speed
            if (!--e.remaining) {
                e.rest = !e.rest
                e.remaining = e.rest ? e.restTime : e.flyTime
            }
        })
        return r
    }, input.map(s => s.match(/(\d+)/g)).map(m => ({
        speed: +m[0], flyTime: +m[1], restTime: +m[2], distance: 0, remaining: +m[1]
    }))).reduce((r, v) => r > v.distance ? r : v.distance, 0)
}
