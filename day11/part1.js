module.exports = input => {
    var toNum = i => i.split``.reduce((r, v, i) => r + Math.pow(26, 7 - i) * (v.charCodeAt(0) - 97), 0)
    var toStr = n => [...Array(8)].reduce((r, v, i) => {
        var p = Math.pow(26, 7 - i)
        var m = r.n % p
        var d = (r.n - m) / p
        r.n = m
        r.s += String.fromCharCode(d + 97)
        return r
    }, {s: '', n: n}).s

    var q = [...Array(24).keys()].map(i => [i + 97, i + 98, i + 99].map(c => String.fromCharCode(c)).join``)
    var test = s => require('lodash').uniq(s.match(/(.)\1/g) || []).length > 1 && q.some(p => ~s.indexOf(p))

    do input = toStr(toNum(input) + 1).replace('i', 'j').replace('l', 'm').replace('o', 'p')
    while (!test(input))

    return input
}
