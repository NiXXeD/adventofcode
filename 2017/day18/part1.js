module.exports = input => {
    let instructions = input
        .map(line => line.split` `)
        .map(([op, a, b]) => ({op, a, b}))
    let memory = {}, i = 0, lastSound = 0
    let deref = v => /[a-z]+/.test(v) ? memory[v] || 0 : +v
    let ops = {
        snd: a => lastSound = deref(a),
        set: (a, b) => memory[a] = deref(b),
        add: (a, b) => memory[a] += deref(b),
        mul: (a, b) => memory[a] *= deref(b),
        mod: (a, b) => memory[a] %= deref(b),
        rcv: a => deref(a) && (i = -2),
        jgz: (a, b) => deref(a) > 0 && (i += deref(b) - 1)
    }

    while (i >= 0 && i < instructions.length) {
        let ins = instructions[i]
        ops[ins.op](ins.a, ins.b)
        i++
    }

    return lastSound
}
