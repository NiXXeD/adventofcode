module.exports = (input, part2 = false) => {
    let deref = v => 'abcd'.includes(v) ? registers[v] : +v
    let registers = {a: part2 ? 12 : 7, b: 0, c: 0, d: 0}
    let instructions = input.map(str => str.split` `)

    //optimizations for multiplication
    instructions[4] = ['mlt', 'b', 'd', 'a']
    instructions[5] = ['cpy', '0', 'd']
    instructions[6] = ['noop']
    instructions[7] = ['noop']
    instructions[8] = ['noop']
    instructions[9] = ['noop']

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
        } else if (a === 'tgl') {
            let it = instructions[i + deref(b)]
            if (it) {
                it[0] = {inc: 'dec', dec: 'inc', jnz: 'cpy', cpy: 'jnz', tgl: 'inc'}[it[0]]
            }
        }
    }

    return registers.a
}
