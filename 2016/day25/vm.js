module.exports = input => {
    let instructions = input.map(str => str.split` `)
    let registers = {a: 0, b: 0, c: 0, d: 0}
    let deref = v => 'abcd'.includes(v) ? registers[v] : +v
    let output = []
    for (let i = 0; i < instructions.length; i++) {
        let [a, b, c, d] = instructions[i]

        if (a === 'cpy' && 'abcd'.includes(c)) {
            registers[c] = deref(b)
        } else if (a === 'inc') {
            registers[b]++
        } else if (a === 'dec') {
            registers[b]--
        } else if (a === 'jnz' && deref(b) !== 0) {
            i += (deref(c)) - 1
        } else if (a === 'mlt') {
            registers[d] = deref(b) * deref(c)
        } else if (a === 'div') {
            registers[d] = Math.floor(deref(b) / deref(c))
        } else if (a === '+=') {
            registers[b] += deref(c)
        } else if (a === '-=') {
            registers[b] -= deref(c)
        } else if (a === 'out') {
            let val = deref(b)
            output.push(val)
        }
    }
    return output.map(c => String.fromCharCode(c)).join('')
}
