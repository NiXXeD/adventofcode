module.exports = (i, t = 40) => (function f(s, x) {
    return x++ < t ? f(s.match(/(\d)\1*/g).reduce((r, v) => r + v.length + v[0], ''), x) : s
})(i, 0).length
