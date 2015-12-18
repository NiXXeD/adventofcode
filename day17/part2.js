module.exports = input => require('js-combinatorics').power(input)
    .filter(a => a.reduce((r, v) => r + +v, 0) === 150)
    .reduce((r, v) => {
        r.push(v)
        r.min = !r.min || (v.length < r.min) ? v.length : r.min
        return r
    }, [])
    .filter((v, k, a) => v.length === a.min).length
