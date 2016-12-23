module.exports = (input, part2 = false) => {
    let instructions = input.map(str => str.split` `)
    let program = ['let a, b, c, d']
    if (part2) program.push('c = 1')

    let brackets = []
    for (let i = 0; i < instructions.length; i++) {
        let [a, b, c] = instructions[i]

        if (a === 'cpy')
            program.push(`${c} = ${b}`)
        else if (a === 'inc')
            program.push(`${b}++`)
        else if (a === 'dec')
            program.push(`${b}--`)
        else if (a === 'jnz') {
            if (+c < 0) {
                let len = program.length
                let offset = +c + len
                offset -= program.slice(offset, len + 1)
                    .filter(l => l.startsWith('}')).length
                program.push(`} while(${b}) //${i}`)
                program.splice(offset, 0, `do { //${i}`)
            } else {
                if (instructions[i + 1] && instructions[i + 1][0] === 'jnz' && +instructions[i + 1][1]) {
                    program.push(`if (${b}) {`)
                    brackets.push(+instructions[i + 1][2])
                    i++
                } else {
                    program.push(`if (${b}) {`)
                    brackets.push(+c)
                }
            }
        }

        brackets = brackets
            .map(i => i - 1)
            .filter(i => {
                if (!i) {
                    program.push('}')
                    return false
                }
                return true
            })

    }
    program.push('a')

    return eval(program.join`\n`)
}
