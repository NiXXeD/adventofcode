module.exports = (input, wires) => {
    wires = wires || {}
    var test = i => wires.hasOwnProperty(i) || /\d+/.test(i)
    var val = i => wires[i] || +i

    while (input.length) {
        var i = input.shift()
        var m = i.match(/^(\w+)\s?(\w+)?\s?(\w+)?\s->\s(\w+)$/)
        if (!test(m[4])) {
            if (m[2] === 'AND' && test(m[1]) && test(m[3])) {
                wires[m[4]] = val(m[1]) & val(m[3])
            } else if (m[2] === 'OR' && test(m[1]) && test(m[3])) {
                wires[m[4]] = val(m[1]) | val(m[3])
            } else if (m[2] === 'LSHIFT' && test(m[1])) {
                wires[m[4]] = val(m[1]) << val(m[3])
            } else if (m[2] === 'RSHIFT' && test(m[1])) {
                wires[m[4]] = val(m[1]) >> val(m[3])
            } else if (m[1] === 'NOT' && test(m[2])) {
                wires[m[4]] = ~(val(m[2]) >>> 0)
            } else if (!m[2] && test(m[1])) {
                wires[m[4]] = val(m[1])
            } else {
                input.push(i)
            }
        }
    }

    return wires.a
}
