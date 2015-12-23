module.exports = (input, a=0) => {
    var i = -1, reg = {a: a, b: 0}, program = input.map(s => s.match(/([^, ]+)/g)), ops = {
        hlf: x => reg[x] = Math.floor(reg[x] / 2),
        tpl: x => reg[x] *= 3,
        inc: x => reg[x]++,
        jmp: x => i += +x - 1,
        jie: (x, y) => i += reg[x] % 2 === 0 ? +y - 1 : 0,
        jio: (x, y) => i += reg[x] === 1 ? +y - 1 : 0
    }
    while (++i < program.length) {
        var op = program[i]
        ops[op[0]](op[1], op[2])
    }
    return reg.b
}
