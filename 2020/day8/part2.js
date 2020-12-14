module.exports = input => {
    const program = input
        .map(i => i.match(/(.{3}) (\+|-)(\d+)/))
        .map(([, op, sign, num]) => ({op, sign, num: +num, count: 0}))

    const run = bug => {
        const instructions = program.map((i, index) => {
            return index === bug ? {...i, op: i.op === 'jmp' ? 'nop' : 'jmp'} : {...i}
        })

        let index = 0, acc = 0
        do {
            let {op, sign, num} = instructions[index]
            instructions[index].count++

            let value = sign === '-' ? -1 * num : num
            if (op === 'acc') acc += value
            else if (op === 'jmp') index += value

            if (op !== 'jmp') index++

            if (!instructions[index]) return acc
        } while (instructions[index].count === 0 && !!instructions[index])
        return false
    }

    return program
        .map((i, index) => {
            if (i.op === 'nop' || i.op === 'jmp') {
                return run(index)
            } else {
                return false
            }
        })
        .filter(i => i > 0)[0]
}
