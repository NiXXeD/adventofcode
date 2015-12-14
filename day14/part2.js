var _ = require('lodash')

module.exports = input => {
    var r = input.map(s => s.match(/(\w+).+?(\d+).+?(\d+).+?(\d+)/)).map(m => ({
        name: m[1],
        speed: +m[2],
        flyTime: +m[3],
        restTime: +m[4],
        mode: 'f',
        distance: 0,
        remaining: +m[3],
        points: 0
    }))

    for(var d=0; d<2503; d++) {
        r = r.map(e => {
            if (e.mode === 'f') {
                e.distance += e.speed
            }
            e.remaining--
            if (!e.remaining) {
                e.mode = e.mode === 'f' ? 'r' : 'f'
                e.remaining = e.mode === 'f' ? e.flyTime : e.restTime
            }
            return e
        })

        var max = 0
        r.forEach(e => {
            max = max > e.distance ? max : e.distance
        })

        var winners = _.filter(r, {distance: max})
        winners.map(w => {
            w.points++
            return w
        })
    }

    return r.reduce((r, v) => r > v.points ? r : v.points, 0)
}
