module.exports = input => {
    return [...Array(2503)].reduce(r => {
        r.forEach(e => {
            if (!e.rest) e.distance += e.speed
            if (!--e.remaining) {
                e.rest = !e.rest
                e.remaining = e.rest ? e.restTime : e.flyTime
            }
        })
        var max = r.reduce((r, v) => r > v.distance ? r : v.distance, 0)
        r.filter(e => e.distance == max).forEach(e => e.points++)
        return r
    }, input.map(s => s.match(/(\d+)/g)).map(m => ({
        speed: +m[0], flyTime: +m[1], restTime: +m[2], distance: 0, remaining: +m[1], points: 0
    }))).reduce((r, v) => r > v.points ? r : v.points, 0)
}
