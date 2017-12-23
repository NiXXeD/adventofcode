module.exports = input => {
    let instructions = input
        .map(line => line.split` `)
        .map(([op, a, b]) => ({op, a, b}))
    let memory = {}, i = 0, multiplyCount = 0
    let deref = v => /[a-z]+/.test(v) ? memory[v] || 0 : +v
    let ops = {
        set: (a, b) => memory[a] = deref(b),
        sub: (a, b) => memory[a] -= deref(b),
        mul: (a, b) => {
            memory[a] *= deref(b)
            multiplyCount++
        },
        jnz: (a, b) => deref(a) !== 0 && (i += deref(b) - 1)
    }

    while (i >= 0 && i < instructions.length) {
        let ins = instructions[i]
        ops[ins.op](ins.a, ins.b)
        i++
    }

    return multiplyCount
}
