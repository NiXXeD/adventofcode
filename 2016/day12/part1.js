module.exports = (input, part2 = false) => {
    const deref = v => /a|b|c|d/.test(v) ? registers[v] : +v
    let registers = {a: 0, b: 0, c: part2 ? 1 : 0, d: 0}

    for (let i = 0; i < input.length; i++) {
        let cmd = input[i].split(' ')
        let [a, b, c] = cmd

        if (a === 'cpy') {
            registers[c] = deref(b)
        } else if (a === 'inc') {
            registers[b]++
        } else if (a === 'dec') {
            registers[b]--
        } else if (a === 'jnz' && deref(b) !== 0) {
            i += (+c) - 1
        }
    }

    return registers.a
}
