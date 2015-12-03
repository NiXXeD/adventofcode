var s = {x:0,y:0}, b = {x:0,y:0}
console.log(Object.keys(Array.from(process.argv[2]).reduce((r, v, i) => {
    return (w => {
        if (v == '^') w.y++
        if (v == '>') w.x++
        if (v == 'v') w.y--
        if (v == '<') w.x--
        r[`${w.x},${w.y}`] = ++r[`${w.x},${w.y}`] || 1
        return r
    })(i % 2 ? s : b)
}, {'0,0': 2})).length)
