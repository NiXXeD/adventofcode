const _ = require('lodash')

module.exports = input => {
    let output = {}
    let values = _(input).filter(v => /^va/.test(v))
        .map(s => s.match(/(\d+)/g))
        .map(m => ({
            value: +m[0],
            bot: +m[1]
        }))
        .value()

    let bots = _(input).filter(v => /^bo/.test(v))
        .map(s => s.match(/(\d+).*?(output|bot) (\d+).*?(output|bot) (\d+)/))
        .map(m => ({
            bot: +m[1],
            low: {
                dest: m[2],
                value: +m[3]
            },
            high: {
                dest: m[4],
                value: +m[5]
            },
            data: []
        }))
        .sortBy('bot')
        .map(b => {
            b.f = input => {
                b.data.push(input)

                if (b.data.length == 2) {
                    let low = _.min(b.data)
                    let high = _.max(b.data)

                    b.low.real = low
                    b.high.real = high
                    b.low.dest === 'output' ? output[b.low.value] = low : bots[b.low.value].f(low)
                    b.high.dest === 'output' ? output[b.high.value] = high : bots[b.high.value].f(high)
                }
            }

            return b
        })
        .value()

    values.forEach(v => {
        bots[v.bot].f(v.value)
    })

    return _.find(bots, b => b.low.real === 17 && b.high.real === 61).bot
}
