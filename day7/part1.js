module.exports = (i, w={}) => {
    var ops = {AND: (a, b) => a & b, OR: (a, b) => a | b, LSHIFT: (a, b) => a << b,
        RSHIFT: (a, b) => a >> b, NOT: (a, b) => b ^ 65535, VAL: (a, b) => b}
    while (i.length) {
        var [o, a, op, b, c] = i.shift().match(/([a-z0-9]*)\b\s?([A-Z]+)?\s?(\S+)\s->\s(\S+)/)
        if ([a, b].every(i => !i || w.hasOwnProperty(i) || /\d+/.test(i)))
            w[c] = w[c] || ops[op || 'VAL'](...[a, b].map(i => w[i] || +i))
        else i.push(o)
    }
    return w.a
}
