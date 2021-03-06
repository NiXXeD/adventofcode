module.exports = input => {
    let components = input.map(str => str.split`/`)
        .map(([a, b]) => ({id: `${a}/${b}`, a: +a, b: +b}))

    let queue = [{port: 0, used: '', strength: 0}], longest = {length: 0, strength: 0}
    do {
        let {port, used, strength} = queue.pop()
        let valid = components.filter(comp => (comp.a === port || comp.b === port) && !used.includes(comp.id))
        if (valid.length) {
            queue.push(...valid.map(comp => ({
                port: (comp.a === port ? comp.b : comp.a),
                used: `${used},${comp.id}`,
                strength: strength + comp.a + comp.b
            })))
        } else {
            if (used.length > longest.length || (used.length === longest.length && strength > longest.strength)) {
                longest = {strength, length: used.length}
            }
        }
    } while (queue.length)
    return longest.strength
}
