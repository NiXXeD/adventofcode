module.exports = (input, lowcal = false) => {
    var p = input.map(s => s.match(/(-?\d)/g).map(Number)), e = []
    for (let a = 0; a < 101; a++) for (let b = 1; b < 101; b++)
        for (let c = 0; c < 101; c++) for (let d = 0; d < 101; d++)
            if (a + b + c + d === 100 && 3 * a - 3 * b - c > 0 &&
                4 * c - 2 * d > 0 && 2 * d - 3 * a > 0) e.push([a, b, c, d])
    return e.map(a => a.map((b, i) => p[i].map(c => c * b)))
        .map(a => a.reduce((r, v) => r.map((a, i) => a + v[i]), [0, 0, 0, 0, 0]))
        .filter(a => !lowcal || a[4] === 500)
        .map(a => a.slice(0, 4).reduce((r, v) => r * v, 1))
        .reduce((r, v) => r > v ? r : v, 0)
}
