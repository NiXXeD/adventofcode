module.exports = input => {
    let currentState = input[0].match(/Begin.+(.)./)[1]
    let steps = +input[1].match(/(\d+)/)[1]
    let states = input.slice(3).join` `.split(/In/g).slice(1)
        .map(str => str.match(/(\b\w\b|left|right)/g))
        .map(([state, value1, write1, move1, next1, value2, write2, move2, next2]) => ({
            state,
            [value1]: {write: +write1, move: move1, next: next1},
            [value2]: {write: +write2, move: move2, next: next2}
        }))
        .reduce((a, v) => ({...a, [v.state]: v}), {})

    let tape = [0], index = 0
    for (let i = 0; i < steps; i++) {
        let state = states[currentState]
        let currentValue = tape[index]
        currentState = state[currentValue].next
        tape[index] = state[currentValue].write
        if (state[currentValue].move === 'left') {
            if (index === 0) tape.unshift(0)
            else index--
        } else {
            index++
            if (index === tape.length) tape.push(0)
        }
    }

    return tape.reduce((a, v) => +v + a, 0)
}
