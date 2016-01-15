module.exports = (input, a = 0) => {
    let i = 0, reg = {a: a, b: 0}, program = input.map(s => s.match(/([^, ]+)/g)), ops = {
        hlf: x => reg[x] >>= 1, tpl: x => reg[x] *= 3, inc: x => reg[x]++, jmp: x => i += +x - 1,
        jie: (x, y) => i += reg[x] % 2 === 0 ? +y - 1 : 0, jio: (x, y) => i += reg[x] === 1 ? +y - 1 : 0
    }
    do {
        let [o, x, y] = program[i]
        ops[o](x, y)
    } while (++i < program.length)
    return reg.b
}
