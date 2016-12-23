module.exports = (input, part2 = false) => {
    let deref = v => 'abcd'.includes(v) ? registers[v] : +v
    let registers = {a: 0, b: 0, c: part2 ? 1 : 0, d: 0}
    let instructions = input.map(str => str.split` `)

    //optimizations for +=
    instructions[6] = ['+=', 'd', 'c']
    instructions[7] = ['cpy', '0', 'c']
    instructions[8] = ['noop']

    instructions[10] = ['+=', 'a', 'b']
    instructions[11] = ['cpy', '0', 'b']
    instructions[12] = ['noop']

    instructions[18] = ['+=', 'a', 'd']
    instructions[19] = ['cpy', '0', 'd']
    instructions[20] = ['noop']

    for (let i = 0; i < instructions.length; i++) {
        let [a, b, c] = instructions[i]

        if (a === 'cpy')
            registers[c] = deref(b)
        else if (a === 'inc')
            registers[b]++
        else if (a === 'dec')
            registers[b]--
        else if (a === 'jnz' && deref(b) !== 0)
            i += (+c) - 1
        else if (a === '+=')
            registers[b] += deref(c)

    }

    return registers.a
}
