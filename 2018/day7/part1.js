const _ = require('lodash')
module.exports = input => {
    let order = input.map(l => l.match(/(\b\w\b)/gi))
    let steps = _.chain(order)
        .flatten()
        .uniq()
        .sort()
        .map(key => ({
            key,
            done: false,
            deps: order.filter(([a, b]) => b === key)
                .map(d => d[0])
        }))
        .keyBy('key')
        .value()

    let result = ''
    let found
    do {
        found = _.find(steps, step => !step.done && step.deps.every(dep => steps[dep].done === true))
        if (found) {
            found.done = true
            result += found.key
        }
    } while (found)

    return result
}
