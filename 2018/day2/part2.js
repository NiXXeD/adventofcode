module.exports = input => {
    let w1, w2, fix = (a, b) => a.filter((c, i) => b[i] === c)
    input = input.map(i => i.split``)
    while (!w2) {
        w1 = input.pop()
        w2 = input.find(w2 => w2.length - fix(w1, w2).length === 1)
    }
    return fix(w1, w2).join``
}
