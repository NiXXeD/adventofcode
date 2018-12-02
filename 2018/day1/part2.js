module.exports = input => {
    let history = {'0': 1}, freq = 0, found = false
    while (!found) {
        found = input.find(delta => {
            let [, o, v] = delta.match(/([+-])(\d+)/)
            freq += o === '+' ? +v : (0 - +v)

            if (history[`${freq}`] === 1) return true
            history[`${freq}`] = 1
        })
    }
    return freq
}
