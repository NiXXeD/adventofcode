const _ = require('lodash')
module.exports = input => {
    let instructions = input.map(str => str.split` `)

    // instructions[0] = ['cpy', '2555', 'd']
    // instructions[1] = ['+=', 'd', 'a']
    // instructions[2] = ['noop']
    // instructions[3] = ['noop']
    // instructions[4] = ['noop']
    // instructions[5] = ['noop']
    // instructions[6] = ['noop']
    // instructions[7] = ['noop']

    // instructions[13] = ['div', 'b', 'c', 'a']
    // instructions[14] = ['cpy', '0', 'b']
    // instructions[15] = ['noop']
    // instructions[16] = ['noop']
    // instructions[17] = ['noop']
    // instructions[18] = ['noop']
    // instructions[19] = ['noop']

    // instructions[0] = ['-=', 'b', 'c']
    // instructions[1] = ['cpy', '0', 'c']
    // instructions[2] = ['noop']

    for (let i = 0; i < 255; i++) {
        let result = test(i)
        if (result) {
            return i
        }
    }

    function test(a) {
        let registers = {a, b: 0, c: 0, d: 0}
        let deref = v => 'abcd'.includes(v) ? registers[v] : +v
        let output = []
        for (let i = 0; i < instructions.length; i++) {
            let [a, b, c, d] = instructions[i]

            if (a === 'cpy' && 'abcd'.includes(c)) {
                registers[c] = deref(b)
            } else if (a === 'inc') {
                registers[b]++
            } else if (a === 'dec') {
                registers[b]--
            } else if (a === 'jnz' && deref(b) !== 0) {
                i += (deref(c)) - 1
            } else if (a === 'mlt') {
                registers[d] = deref(b) * deref(c)
            } else if (a === 'div') {
                registers[d] = Math.floor(deref(b) / deref(c))
            } else if (a === '+=') {
                registers[b] += deref(c)
            } else if (a === '-=') {
                registers[b] -= deref(c)
            } else if (a === 'out') {
                let val = deref(b)
                output.push(val)

                if (output.length === 10) {
                    return output.join`` === '0101010101' || output.join`` === '1010101010'
                }
            }
        }
    }
}
