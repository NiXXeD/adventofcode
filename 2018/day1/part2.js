module.exports = input => {
    // input = '+3,+3,+4,-2,-4'.split(`,`)
    let history = {'0': 1}, freq = 0, found = false
    while(!found) {
        found = input.find(delta => {
            let [, o, v] = delta.match(/([+-])(\d+)/)
            if (o === '+') freq += +v
            else freq -= +v

            if (history[`${freq}`] === 1) return true
            history[`${freq}`] = 1
        })
    }
    return freq
}
