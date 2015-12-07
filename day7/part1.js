module.exports = (input, wires={}) => {
    var test = i => !i || wires.hasOwnProperty(i) || /\d+/.test(i)
    var val = i => wires[i] || +i
    var ops = {AND: (a, b) => a & b, OR: (a, b) => a | b, LSHIFT: (a, b) => a << b,
        RSHIFT: (a, b) => a >> b, NOT: (a, b) => ~b, VAL: (a, b) => b}

    while (input.length) {
        var [o, a, op, b, c] = input.shift().match(/([a-z0-9]*)\b\s?([A-Z]+)?\s?(\S+)\s->\s(\S+)/)
        if (!test(c))
            if (test(a) && test(b)) wires[c] = ops[op || 'VAL'](val(a), val(b))
            else input.push(o)
    }

    return wires.a
}
