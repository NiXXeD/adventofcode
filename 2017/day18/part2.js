module.exports = input => {
    let instructions = input
        .map(line => line.split` `)
        .map(([op, a, b]) => ({op, a, b}))
    let programs = [
        {memory: {p: 0}, i: 0, sentCount: 0, queue: []},
        {memory: {p: 1}, i: 0, sentCount: 0, queue: []}
    ]

    const execute = (instructions, program, outbound) => {
        let halt = false
        let ops = {
            snd: a => {
                outbound.push(deref(a))
                program.sentCount++
            },
            rcv: a => {
                if (program.queue.length) {
                    program.memory[a] = program.queue.shift()
                } else {
                    halt = true
                }
            },
            set: (a, b) => program.memory[a] = deref(b),
            add: (a, b) => program.memory[a] += deref(b),
            mul: (a, b) => program.memory[a] *= deref(b),
            mod: (a, b) => program.memory[a] %= deref(b),
            jgz: (a, b) => deref(a) > 0 && (program.i += deref(b) - 1)
        }
        let deref = v => /[a-z]+/.test(v) ? program.memory[v] || 0 : +v

        while (program.i >= 0 && program.i < instructions.length && !halt) {
            let ins = instructions[program.i]
            ops[ins.op](ins.a, ins.b)
            if (!halt) program.i++
        }
    }

    do {
        execute(instructions, programs[0], programs[1].queue)
        execute(instructions, programs[1], programs[0].queue)
    } while (programs[0].queue.length || programs[1].queue.length)

    return programs[1].sentCount
}


