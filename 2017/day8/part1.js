module.exports = input => {
    let instructions = input
        .map(line => line.split` `)
        .map(([a, op1, b, , c, op2, d]) => ({a, op1, b, c, op2, d}))
    let memory = {}
    let deref = v => /[a-z]+/.test(v) ? memory[v] || 0 : +v
    let ops = {
        '<': (a, b) => a < b,
        '<=': (a, b) => a <= b,
        '>': (a, b) => a > b,
        '>=': (a, b) => a >= b,
        '==': (a, b) => a === b,
        '!=': (a, b) => a !== b,
        'inc': (a, b) => memory[a] = (memory[a] || 0) + b,
        'dec': (a, b) => memory[a] = (memory[a] || 0) - b
    }

    instructions.forEach(i => {
        if (ops[i.op2](deref(i.c), deref(i.d))) {
            ops[i.op1](i.a, +i.b)
        }
    })

    return Object.values(memory).reduce((a, v) => Math.max(a, v))
}
