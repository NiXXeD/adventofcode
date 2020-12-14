module.exports = input => {
    const instructions = input
        .map(i => i.match(/(.{3}) (\+|-)(\d+)/))
        .map(([, op, sign, num]) => ({op, sign, num: +num, count: 0}))

    let index = 0, acc = 0
    do {
        let {op, sign, num} = instructions[index]
        instructions[index].count++

        let value = sign === '-' ? -1 * num : num
        if (op === 'acc') acc += value
        else if (op === 'jmp') index += value

        if (op !== 'jmp') index++
    } while (instructions[index].count === 0)

    return acc
}
