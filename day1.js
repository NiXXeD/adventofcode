var b = null
var f = Array.from(process.argv[2]).reduce((r, v, i) => {
    r += v === '(' ? 1 : -1
    if (r < 0 && !b) b = i
    return r
}, 0)
console.log('Final floor:', f)
console.log('First basement:', b + 1)
