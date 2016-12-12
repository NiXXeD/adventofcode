module.exports = (input, part2 = false) => {
    let deref = v => 'abcd'.includes(v) ? registers[v] : +v
    let registers = {a: 0, b: 0, c: part2 ? 1 : 0, d: 0}
    let instructions = input.map(str => str.split` `)

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
    }

    return registers.a
}
