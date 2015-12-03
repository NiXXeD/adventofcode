var sx = 0, sy = 0, rx = 0, ry = 0
var h = Array.from(process.argv[2]).reduce((r, v, i) => {
    if (i % 2) {
        if (v === '^') sy++
        else if (v === 'v') sy--
        else if (v === '<') sx--
        else if (v === '>') sx++
        r[`${sx},${sy}`] = (r[`${sx},${sy}`] || 0) + 1
    } else {
        if (v === '^') ry++
        else if (v === 'v') ry--
        else if (v === '<') rx--
        else if (v === '>') rx++
        r[`${rx},${ry}`] = (r[`${rx},${ry}`] || 0) + 1
    }
    return r
}, {'0,0': 1})

console.log(Object.keys(h).length)
