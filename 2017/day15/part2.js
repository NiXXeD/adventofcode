module.exports = input => {
    let [a, b] = input.join``.match(/\d+/g).map(i => +i)
    let al = [], bl = [], count = 0, max = 5000000

    while (al.length < max) {
        a = (a * 16807) % 2147483647
        if (a % 4 === 0) al.push(a)
    }

    while (bl.length < max) {
        b = (b * 48271) % 2147483647
        if (b % 8 === 0) bl.push(b)
    }

    al = al.map(i => i.toString(2).slice(-16))
    bl = bl.map(i => i.toString(2).slice(-16))

    for (let i = 0; i < al.length; i++) {
        if (al[i] === bl[i]) count++
    }

    return count
}
