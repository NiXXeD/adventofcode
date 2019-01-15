const _ = require('lodash')
module.exports = input => {
    let minTime = 60, order = input.map(l => l.match(/(\b\w\b)/gi))
    let workerCount = 5, workers = [...Array(workerCount)]
    let steps = _.chain(order)
        .flatten()
        .uniq()
        .sort()
        .map(key => ({
            key,
            worker: -1,
            seconds: minTime + key.charCodeAt(0) - 64,
            deps: order.filter(([a, b]) => b === key)
                .map(d => d[0])
        }))
        .keyBy('key')
        .value()

    let done = false, readyToWork, seconds = 0
    do {
        workers.forEach((key, index) => {
            if (!key) {
                readyToWork = _.find(steps, step => step.seconds && step.worker < 0 && step.deps.every(dep => steps[dep].seconds <= 0))
                if (readyToWork) {
                    key = readyToWork.key
                    readyToWork.worker = index
                    workers[index] = key
                }
            }
        })

        workers.forEach((key, index) => {
            if (key) {
                steps[key].seconds--
                if (steps[key].seconds <= 0) {
                    workers[index] = null
                }
            }
        })

        done = _.every(steps, step => step.seconds <= 0)
        seconds++
    } while (!done)

    return seconds
}
