const _ = require('lodash')

module.exports = input => {
    const events = _.chain(input)
        .map(i => i.match(/\[(\d+)-(\d+)-(\d+) (\d+):(\d+)] (Guard|falls|wakes) #?(\d+)?/))
        .map(([, year, month, day, hour, minute, action, guard]) => ({
                guard,
                month: +month,
                day: +day,
                hour: +hour,
                minute: +minute,
                action
            }
        ))
        .orderBy(['month', 'day', 'hour', 'minute'])
        .value()

    const state = _.chain(events)
        .map('guard')
        .filter()
        .uniq()
        .map(id => ({
            id,
            asleep: false,
            minutesAsleep: 0,
            byMinute: _.range(60)
                .map(() => 0)
        }))
        .keyBy('id')
        .value()

    for (let month = 1; month <= 12; month++) {
        for (let day = 0; day <= 31; day++) {
            for (let hour = 0; hour < 24; hour++) {
                for (let minute = 0; minute < 60; minute++) {
                    let event
                    if (events.length && events[0].month === month && events[0].day === day &&
                        events[0].hour === hour && events[0].minute === minute) {

                        event = events.shift()
                        if (event.action === 'Guard') {
                            state.current = event.guard
                        } else if (event.action === 'falls') {
                            state[state.current].asleep = true
                            state[state.current].minutesAsleep++
                            state[state.current].byMinute[minute]++
                        } else if (event.action === 'wakes') {
                            state[state.current].asleep = false
                        }
                    } else if (state[state.current] && state[state.current].asleep) {
                        state[state.current].minutesAsleep++
                        state[state.current].byMinute[minute]++
                    }
                }
            }
        }
    }

    const guard = _.maxBy(_.values(state), 'minutesAsleep')
    const minute = _.chain(guard.byMinute)
        .map((v, i) => ({v, i}))
        .maxBy('v')
        .value()

    return +guard.id * minute.i
}

