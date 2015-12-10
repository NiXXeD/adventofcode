module.exports = (i, t=40) => (function f(s, x) {
    if (x++ < t) return f(s.match(/((\d)\2*)/g).reduce((r, v) => r + v.length + v[0], ''), x)
    return s
})(i, 0).length
